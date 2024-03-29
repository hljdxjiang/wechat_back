import React, { FC, useEffect, useRef, useState } from "react";
import { Button, Popconfirm, message } from "antd";
import MyTable from "@/components/common/table";
import { isAuthorized } from "@/assets/js/publicFunc";
import MyModal from "@/components/common/myModal";
import { onItemChange } from "@/utils/tableCommon";

interface PageProps {
    columns?: Object[];
    searchConfigList?: Object[];
    showAddBtn?: boolean;
    showBatchDelBtn?: boolean;
    showOpeation?: boolean;
    permissionPrefix?: String;
    apiFun?: (arg0?: unknown[]) => Promise<{}>;
    addApiFun?: (arg0?: unknown[]) => Promise<{}>;
    delApiFun?: (arg0?: unknown[]) => Promise<{}>;
    editApiFun?: (arg0?: unknown[]) => Promise<{}>;
}

const ModelPage: FC<PageProps> = (props: PageProps) => {
    const {
        columns,
        apiFun,
        searchConfigList,
        showAddBtn,
        showBatchDelBtn,
        showOpeation,
        permissionPrefix,
        addApiFun,
        delApiFun,
        editApiFun,
    } = props;

    const tableRef: RefType = useRef();
    const [open, setOpen] = useState(false);
    const [canEdit, setCanEdit] = useState(false);
    const [selectRow, setSelectRow] = useState(Object);
    const [selectKeys, setSelectKeys] = useState([]);
    const [key, setKey] = useState(String);
    const [tableColumns, setTabColumns] = useState([]);

    useEffect(() => {
        var tableColums = [];
        columns.forEach((element) => {
            if (element["tableShow"] === undefined || element["tableShow"] === true) {
                tableColums.push(element);
            }
        });
        if (showOpeation === false) {
            setTabColumns(tableColums);
        } else {
            const opera = {
                title: "操作",
                dataIndex: "operations",
                align: "center",
                editFlag: false,
                render: (text, record) => (
                    <>
                        {isAuthorized(permissionPrefix + ":edit") && (
                            <Button
                                className="btn"
                                onClick={() => {
                                    doEdit(record);
                                }}
                                size="small"
                            >
                                编辑
                            </Button>
                        )}
                        <Button
                            className="btn"
                            onClick={() => {
                                doView(record);
                            }}
                            size="small"
                        >
                            查看
                        </Button>
                        {isAuthorized(permissionPrefix + ":add") && (
                            <Popconfirm
                                title="确认删除?删除后数据将无法恢复"
                                onCancel={() => { }}
                                onConfirm={() => doDel(record)}
                                okText="删除"
                                cancelText="取消"
                            >
                                <Button className="btn" size="small">
                                    删除
                                </Button>
                            </Popconfirm>
                        )}
                    </>
                ),
            };
            var newColumns = [...tableColums, opera];
            setTabColumns(newColumns);
        }
    }, [columns, showOpeation, permissionPrefix]);

    // 添加
    const add = () => {
        setOpen(true);
        setCanEdit(true);
        setSelectRow({ status: 0 });
    };
    // 编辑
    const doEdit = (record) => {
        setSelectRow(record);
        setOpen(true);
        setCanEdit(true);
    };
    // 查看
    const doView = (record) => {
        setSelectRow(record);
        setOpen(true);
        setCanEdit(false);
    };
    const doDel = (record) => {
        delApiFun(record);
        message.success("删除成功");
        setTimeout(() => {
            setKey((Math.random() * 10).toString());
        }, 500);
    };

    const beforeOk = () => {
        var row = selectRow;
        columns.forEach((e) => {
            if (e["editType"] === "edit") {
                row[e["dataIndex"]] = selectRow[e["dataIndex"]].toHTML();
            }
        });
        return row;
    };

    const onChange = (e, stype?, sid?) => {
        var newRow = onItemChange(selectRow, e, stype, sid);
        setSelectRow(newRow);
    };

    // 新增按钮
    const AddBtn = () => (
        <Button className="fr" onClick={add} type="primary">
            新增
        </Button>
    );

    const onSelectRow = (rowKeys: string[]) => {
        setSelectKeys(rowKeys);
    };

    const handleOk = () => {
        var row = beforeOk();

        if (row["id"] === undefined) {
            addApiFun(row);
            message.success("添加成功");
        } else {
            editApiFun(row);
            message.success("修改成功");
        }
        setTimeout(() => {
            setSelectRow({});
            setCanEdit(false);
            setOpen(false);
            setKey((Math.random() * 10).toString());
        }, 500);
    };

    const handCancle = () => {
        setSelectRow({});
        setCanEdit(false);
        setOpen(false);
    };
    return (
        <>
            {isAuthorized(permissionPrefix + ":add") && showAddBtn && <AddBtn />}
            <MyTable
                key={key}
                apiFun={apiFun}
                columns={tableColumns}
                ref={tableRef}
                onSelectRow={onSelectRow}
                searchConfigList={searchConfigList}
                extraProps={{ results: 10 }}
            />
            <MyModal
                title="aaaa"
                visible={open}
                onCancel={handCancle}
                onOk={handleOk}
                columns={columns}
                canEdit={canEdit}
                row={selectRow}
                onChange={onChange}
            />
        </>
    );
};
ModelPage.defaultProps = {
    columns: [],
    searchConfigList: [],
    showAddBtn: true,
    showBatchDelBtn: false,
    showOpeation: false,
    permissionPrefix: "",
};
export default ModelPage;
