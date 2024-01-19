import React, { FC, useEffect, useRef, useState } from "react";
import { Button, Popconfirm, message } from "antd";
import MyTable from "@/components/common/table";
import { isAuthorized } from "@/assets/js/publicFunc";
import FormPage from "./formPage";
import { ButtonInfo, SearchColumn, TableColumn } from "@/app_models/user";

interface PageProps {
    columns?: TableColumn[];
    searchConfigList?: SearchColumn[];
    rowBtns?: ButtonInfo[];
    headerBtns?: ButtonInfo[];
    showAddBtn?: boolean;
    showBatchDelBtn?: boolean;
    showOpeation?: boolean;
    permissionPrefix?: String;
    apiFun?: (arg0?: unknown[]) => Promise<{}>;
    addApiFun?: (arg0?: unknown[]) => Promise<{}>;
    delApiFun?: (arg0?: unknown[]) => Promise<{}>;
    editApiFun?: (arg0?: unknown[]) => Promise<{}>;
    children?: React.ReactNode;
}

const ViewPage: FC<PageProps> = (props: PageProps) => {
    const {
        columns,
        rowBtns,
        headerBtns,
        apiFun,
        searchConfigList,
        children,
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
    const [title, setTitle] = useState('');

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
            const opera: TableColumn = {
                title: "操作",
                dataIndex: "operations",
                align: "center",
                editFlag: false,
                render: (text, record) => (
                    <>
                        {Array.isArray(rowBtns) && (
                            rowBtns.map((item) => (
                                <Button className="btn"
                                    onClick={() => { item.func(); }}
                                    size="small">
                                    {item.title}
                                </Button>
                            ))
                        )}
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
                        {isAuthorized(permissionPrefix + ":del") && (
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
                key: undefined
            };
            var newColumns = [...tableColums, opera];
            setTabColumns(newColumns);
        }
    }, [columns, showOpeation, permissionPrefix]);

    // 添加
    const add = () => {
        setTitle("新增");
        setOpen(true);
        setCanEdit(true);
        setSelectRow({ status: 0 });
    };
    // 编辑
    const doEdit = (record) => {
        setTitle("编辑");
        setSelectRow(record);
        setOpen(true);
        setCanEdit(true);
    };
    // 查看
    const doView = (record) => {
        setTitle("查看");
        setSelectRow(record);
        setOpen(true);
        setCanEdit(false);
    };
    const doDel = (record) => {
        delApiFun(record).then((res) => {
            message.success("删除成功");
        }).catch((err) => {
            console.log(err);
        });
        setTimeout(() => {
            setKey((Math.random() * 10).toString());
        }, 500);
    };

    const beforeOk = () => {
        var row = selectRow;
        columns.forEach((e) => {
            if (e.editType === "edit") {
                row.e.dataIndex = selectRow.e.dataIndex.toHTML();
            }
        });
        return row;
    };

    const doBack = () => {
        setOpen(false);
    }

    // 新增按钮
    const AddBtn = () => (
        <Button className="fr" onClick={add} type="primary">
            新增
        </Button>
    );

    const onSelectRow = (rowKeys: string[]) => {
        setSelectKeys(rowKeys);
    };

    const handleOk = (e) => {
        debugger
        var row;
        if (!e) {
            row = beforeOk();
        } else {
            row = e;
        }
        if (row["id"] === undefined) {
            addApiFun(row).then((res) => {
                message.success("添加成功");
            }).catch((err) => {
                console.log(err);
            });

        } else {
            editApiFun(row).then((res) => {
                message.success("修改成功");
            }).catch((err) => {
                console.log(err);
            });
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
        open ? <FormPage
            title={title}
            visible={open}
            onBack={doBack}
            onCancel={handCancle}
            onOk={handleOk}
            columns={columns}
            canEdit={canEdit}
            row={selectRow}
            children={children}
        />
            :
            <>
                {Array.isArray(headerBtns) && (headerBtns.map((item) => (
                    <Button className="fr" onClick={() => { item.func() }} type="primary">
                        {item.title}
                    </Button>
                )))}
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
            </>
    );
};
ViewPage.defaultProps = {
    columns: [],
    searchConfigList: [],
    children: null,
    showAddBtn: true,
    showBatchDelBtn: false,
    showOpeation: false,
    permissionPrefix: "",
};
export default ViewPage;
