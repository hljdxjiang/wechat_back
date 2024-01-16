import React, { FC, useRef, useState } from 'react'
import { Modal, Slider, Upload, message } from 'antd'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import $axios from '@/utils/axios'
import AvatarEditor from 'react-avatar-editor';


interface Props {
    onChange?: (arg0: string) => void;
    value?: string;
    fileType:String;
    accept?: string[];
    size?: number;
    action?: string;
}

const FileUpload: FC<Props> = (props) => {
    const [loading, setLoading] = useState<boolean>(false)
    const [imageBase64, setImageBase64] = useState<string | ArrayBuffer>()
    const {
        onChange,
        value,
        fileType='',
        accept = ['*'],
        size = 15,
        action = 'fileUpload/uploadFile'
    } = props

    const uploadButton = loading ? <LoadingOutlined /> : <PlusOutlined />

    const onStart = (): void => {
        setLoading(true)
        onChange(undefined)
    }

    const onSuccess = ({ path }: CommonObjectType) => {
        setLoading(false)
        onChange(path)
    }

    const onError = (): void => {
    }

    const uploadProps = {
        action,
        onStart,
        beforUpload(file) {
            debugger
            return new Promise((resolve, reject) => {
                const reader = new FileReader();

                reader.onload = (e) => {
                    // 获取 base64 编码
                    const base64Image = e.target.result;
                    resolve(file);
                };
            });
        },
        customRequest({ file, filename }) {
            debugger
            const isType = accept.some((item: string) => file.type.includes(item)||item.includes("*"))
            const isSize = file.size / 1024 / 1024 < size
            if (!isType || !isSize) {
                message.error('请上传正确文件')
                return false
            }
            const reader = new FileReader();

            reader.onload = function (event) {
                const imageBase64 = event.target.result;

                var param = {}
                param["fileType"] = fileType;
                param["fileValue"] = imageBase64;

                $axios
                    .post(action, param)
                    .then((res) => {
                        onSuccess(res)
                    })
                    .catch(onError)
            };
            reader.readAsDataURL(file);
        }
    }

    return (
        <Upload
            className="avatar-uploader"
            listType="picture-card"
            showUploadList={false}
            {...uploadProps}
        >
            {value ? (
                <img alt="" src={value} style={{ maxWidth: '100%' }} />
            ) : (
                uploadButton
            )}
        </Upload>
    )
}

export default FileUpload
