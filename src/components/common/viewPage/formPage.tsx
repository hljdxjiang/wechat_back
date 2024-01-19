import { Button, Col, DatePicker, DatePickerProps, Descriptions, Form, Input, Row, TimePicker } from "antd"
import Editor from "../editor"
import moment from 'moment';
import FileUpload from "../fileUpload"
import MySelect from "../mySelect"
import ImgUpload from "../imgUpload"
import React, { FC, useEffect } from 'react'
import { TableColumn } from "@/app_models/user";

interface PageProps {
    row?: object
    columns?: TableColumn[]
    canEdit?: boolean
    onOk?: (arg0?: unknown) => void
    onBack?: (arg0?: unknown) => void
    okApiFun?: (arg0?: unknown[]) => Promise<{}>
    onCancel?: (arg0?: unknown) => void
    visible?: boolean
    width?: string | number
    cancelText?: String
    okText?: String
    keyboard?: boolean
    title: String
    children?: React.ReactNode;
}

const FormPage: FC<PageProps> = (props: PageProps) => {
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
        onBack,
        children,
        visible,
        width,
        cancelText,
        okText,
        keyboard,
        title
    } = props

    const [form] = Form.useForm()

    const generateFieldsValue = (data) => {
        const fieldsValue = {};
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                var item = columns.find((its) => its["dataIndex"] === key)
                if (item) {
                    if (item.editType === "date" ||
                        item.editType === "datetime" ||
                        item.editType === "time") {
                        fieldsValue[key] = data[key] ? moment(data[key]) : null
                    } else {
                        fieldsValue[key] = data[key]
                    }
                }
            }
        }
        return fieldsValue;
    }

    useEffect(() => {
        if (row) {
            var fieldsValue = generateFieldsValue(row);
            form.setFieldsValue(fieldsValue);
        }

    }, [])
    const handOk = (data): void => {
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                var item = columns.find((its) => its["dataIndex"] === key)
                if (item) {
                    if (item.editType === "date" ||
                        item.editType === "datetime" ||
                        item.editType === "time") {
                        var format;
                        var stype = item.editType;
                        if (stype === "datetime") {
                            format = "YYYY-MM-DD hh:mm:ss";
                        } else if (stype === "time") {
                            format = "hh:mm:ss";
                        } else {
                            format = "YYYY-MM-DD";
                        }
                        row[key] = moment().format(format);
                    } else if (item.editType === "edit") {
                        row[key] = data[key].toHTML();
                    } else {
                        row[key] = data[key]
                    }
                }
            }
        }
        onOk(row)
    }
    const handCancle = (): void => {
        onCancel();
    }

    const createItems = () => {
        return columns.map((item, _) => {
            return (
                <Col span={item.editType === "edit" ? 24 : 8} key={item.key}>
                    <Form.Item
                        label={item.title}
                        name={item.dataIndex}
                        rules={item.rules}
                        required={item.requried}
                    >
                        {createInput(item)}
                    </Form.Item></Col>
            )
        })
    }

    const createInput = (item) => {
        var type = item.editType
        var idx = item["dataIndex"];
        if (type === "select") {
            return (<MySelect data={item["data"]} paramType={item["paramType"]} disabled={!canEdit} />)
        }
        if (type === "date") {
            return <DatePicker disabled={!canEdit}></DatePicker>
        }
        if (type === "datetime") {
            return <DatePicker showTime={true} disabled={!canEdit}></DatePicker>
        }
        if (type === "time") {
            return <TimePicker disabled={!canEdit}></TimePicker>
        }
        if (type === "upload") {
            if (canEdit) {
                console.log(row[item["picWidth"]], row[item["picHeight"]])
                return <ImgUpload
                    width={item["picWidth"]}
                    height={item["picHeight"]}></ImgUpload>
            } else {
                return <img src={row[item["dataIndex"]]} width="40" alt="" />
            }
        }

        if (type === "file") {
            if (canEdit) {
                console.log(row[item["picWidth"]], row[item["picHeight"]])
                return <FileUpload fileType={row[item["fileType"]]}></FileUpload>
            } else {
                return <img src={row[item["dataIndex"]]} width="40" alt="" />
            }
        }
        if (type === "edit") {
            return <Editor></Editor>
        }
        if (type === "textarea") {
            return <Input.TextArea disabled={!canEdit}></Input.TextArea>
        }
        return <Input placeholder={item["title"]} allowClear disabled={!canEdit} />
    }

    return (
        <div>
            <Button type="primary" className="btn" onClick={() => { onBack() }}>返回列表</Button>
            <Form onFinish={handOk} form={form}>
                <Row gutter={24}>{createItems()}</Row>
                <Row>
                    <Col span={24} style={{ textAlign: 'right' }}>
                        {canEdit ?
                            <Button type="primary" htmlType="submit">
                                {okText}
                            </Button> : <></>}
                        <Button
                            style={{ margin: '0 8px' }}
                            onClick={() => {
                                handCancle();
                            }}
                        >
                            {cancelText}
                        </Button>
                    </Col>
                </Row>
            </Form>
            {children}
        </div>
    )
}

FormPage.defaultProps = {
    row: {},
    canEdit: false,
    onOk: () => {
    },
    onCancel: () => {
    },
    onBack: () => { },
    visible: false,
    width: "80%",
    cancelText: "取消",
    okText: "确认",
    keyboard: true,
    title: "编辑"
}

export default FormPage