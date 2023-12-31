import React, { FC, useState } from 'react'
import { message, Upload } from 'antd'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import $axios from '@/utils/axios'

interface Props {
    onChange?: (arg0: string) => void;
    value?: string;
    accept?: string[];
    size?: number;
    action?: string;
}

const MyUpload: FC<Props> = (props) => {
    const [loading, setLoading] = useState<boolean>(false)
    const [imageBase64, setImageBase64] = useState<string | ArrayBuffer>()
    const {
        onChange,
        value,
        accept = ['jpg', 'jpeg', 'png', 'gif'],
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

                    // 在这里可以将 base64 编码保存到 state 中或进行其他操作
                    setImageBase64(base64Image);

                    resolve(file);
                };
            });
        },
        customRequest({ file, filename }) {
            debugger
            const isType = accept.some((item: string) => file.type.includes(item))
            const isSize = file.size / 1024 / 1024 < size
            if (!isType || !isSize) {
                message.error('请上传正确文件')
                return false
            }
            const reader = new FileReader();

            reader.onload = function (event) {
                const imageBase64 = event.target.result;

                var param = {}
                param["fileType"] = "aaa";
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

export default MyUpload
