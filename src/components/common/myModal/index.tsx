import React, { FC, useEffect } from 'react'
import { DatePicker, Descriptions, Input, Modal, TimePicker } from 'antd'
import MySelect from '@/components/common/mySelect'
import ImgUpload from '../imgUpload';
import Editor from '../editor';
import moment from 'moment';
import FileUpload from '../fileUpload';

/**
 * 封装对话框，展示修改内容
 * canEdit 是否可修改
 * onOk 点击确认方法
 * onCancel 点击取消方法
 * visible 是否展示
 * width 宽度
 * cancelText 取消按钮文本
 * okText 确认按钮文本
 * title 标题
 * keyboard 是否支持esc按钮关闭
 * columns 展示列
 */

interface ModalProps {
    row?: object
    columns?: Object[]
    canEdit?: boolean
    onOk?: (arg0?: unknown) => void
    okApiFun?: (arg0?: unknown[]) => Promise<{}>
    onCancel?: (arg0?: unknown) => void
    onChange?: (arg0: object, arg1?: unknown, arg2?: unknown) => void
    visible?: boolean
    width?: string | number
    cancelText?: String
    okText?: String
    keyboard?: boolean
    title: String
}

const MyModal: FC<ModalProps> = (
    (props: ModalProps) => {
        /**
         * 引用父组件的ref实例，成为子组件的一个参数
         * 可以引用父组件的ref绑定到子组件自身的节点上.
         */
        const {
            row,
            columns,
            canEdit,
            onOk,
            onCancel,
            onChange,
            visible,
            width,
            cancelText,
            okText,
            keyboard,
            title
        } = props

        useEffect(() => {
            const dataColumns = columns.filter(
                (item) =>
                    item["editType"] === "date" ||
                    item["editType"] === "datetime" ||
                    item["editType"] === "time"
            );

            const handleDateChange = (dataIndex, type) => (date, dateString) => {
                handChange(dataIndex, type, dateString);
            };

            dataColumns.forEach((item) => {
                if (!row[item["dataIndex"]]) {
                    var format;
                    var stype = item["editType"];
                    if (stype === "datetime") {
                        format = "YYYY-MM-DD hh:mm:ss";
                    } else if (stype === "time") {
                        format = "hh:mm:ss";
                    } else {
                        format = "YYYY-MM-DD";
                    }
                    handleDateChange(item["dataIndex"], stype)(null, moment().format(format));
                }
            });
        }, [columns, row]);

        const onDateChange = (dataIndex, type) => (date, dateString) => {
            handChange(dataIndex, type, dateString)
        };

        const handOk = (): void => {
            onOk()
        }
        const handCancle = (): void => {
            onCancel();
        }


        const handChange = (e, stype?, sid?) => {
            onChange(e, stype, sid)
        }


        const createItems = () => {
            return columns.map((item, _) => {
                if (item["editFlag"] === false) {
                    return "";
                }
                if (item["span"] !== undefined) {
                    return (
                        <Descriptions.Item label={item["title"]} span={3}>
                            {createInput(item)}
                        </Descriptions.Item>
                    )
                }
                return (
                    <Descriptions.Item label={item["title"]}>
                        {createInput(item)}
                    </Descriptions.Item>
                )
            })
        }

        const createInput = (item) => {
            var type = item["editType"]
            var idx = item["dataIndex"];
            if (type === "select") {
                return (<MySelect data={item["data"]} value={row[item["dataIndex"]]}
                    onChange={handChange.bind(this, idx, "select")} disabled={!canEdit} />)
            }
            if (type === "date") {
                return <DatePicker value={row[item["dataIndex"]] ? moment(row[item["dataIndex"]]) : moment()} onChange={onDateChange(idx, "date")}
                    disabled={!canEdit}></DatePicker>
            }
            if (type === "datetime") {
                return <DatePicker showTime={true} value={row[item["dataIndex"]] ? moment(row[item["dataIndex"]]) : moment()}
                    onChange={onDateChange(idx, "datetime")} disabled={!canEdit}></DatePicker>
            }
            if (type === "time") {
                return <TimePicker value={row[item["dataIndex"]] ? moment(row[item["dataIndex"]]) : moment()} onChange={onDateChange(idx, "datetime")}
                    disabled={!canEdit}></TimePicker>
            }
            if (type === "upload") {
                if (canEdit) {
                    console.log(row[item["picWidth"]], row[item["picHeight"]])
                    return <ImgUpload value={row[item["dataIndex"]]}
                        width={item["picWidth"]}
                        height={item["picHeight"]}
                        onChange={handChange.bind(this, idx, "upload")}></ImgUpload>
                } else {
                    return <img src={row[item["dataIndex"]]} width="40" alt="" />
                }
            }

            if (type === "file") {
                if (canEdit) {
                    console.log(row[item["picWidth"]], row[item["picHeight"]])
                    return <FileUpload value={row[item["dataIndex"]]} fileType={row[item["fileType"]]}
                        onChange={handChange.bind(this, idx, "upload")}></FileUpload>
                } else {
                    return <img src={row[item["dataIndex"]]} width="40" alt="" />
                }
            }
            if (type === "edit") {
                return <Editor value={row[item["dataIndex"]]} onChange={handChange.bind(this, idx, "edit")}></Editor>
            }
            if (type === "textarea") {
                return <Input.TextArea value={row[item["dataIndex"]]} disabled={!canEdit} id={item["dataIndex"]}
                    onChange={handChange}></Input.TextArea>
            }
            return <Input placeholder={item["title"]} id={item["dataIndex"]} onChange={handChange} allowClear
                value={row[item["dataIndex"]]} disabled={!canEdit} />
        }

        return (
            <div>
                <Modal
                    title={title}
                    onOk={handOk}
                    visible={visible}
                    width={width}
                    onCancel={handCancle}
                    keyboard={keyboard}
                    okText={okText}
                    cancelText={cancelText}
                >
                    <Descriptions bordered>
                        {createItems()}
                    </Descriptions>

                </Modal>
            </div>
        )
    }
)

MyModal.defaultProps = {
    row: {},
    canEdit: false,
    onOk: () => {
    },
    onCancel: () => {
    },
    onChange: () => {
    },
    visible: false,
    width: "80%",
    cancelText: "取消",
    okText: "确认",
    keyboard: true,
    title: "编辑"
}

export default MyModal
