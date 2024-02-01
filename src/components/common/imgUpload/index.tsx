import React, { FC, useRef, useState } from 'react'
import { Modal, Slider, Upload, message } from 'antd'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import $axios from '@/utils/axios'
import AvatarEditor from 'react-avatar-editor';

interface Props {
    onChange?: (arg0: string) => void;
    value?: string;
    accept?: string[];
    width?: string | number;
    height?: string | number;
    size?: number;
    action?: string;
}

const ImgUpload: FC<Props> = (props) => {
    const [loading, setLoading] = useState<boolean>(false)
    const [visible, setVisible] = useState(false);
    const [previewImage, setPreviewImage] = useState<string | ArrayBuffer>()
    const [position, setPosition] = useState({ x: 0.5, y: 0.5 });
    const [rotate, setRotate] = useState(0);
    const [scale, setScale] = useState(1);
    const editorRef: RefType = useRef();

    const {
        onChange,
        value,
        width,
        height,
        accept = ['jpg', 'jpeg', 'png', 'gif'],
        size = 5,
        action = 'fileUpload/uploadFile'
    } = props

    const uploadButton = loading ? <LoadingOutlined /> : <PlusOutlined />

    const handlePreview = async file => {
        if (!file.url && !file.preview) {
            getBase64(file);
        }
    };

    const numericWidth = typeof width === 'string' ? parseInt(width, 10) : width;

    const numericHeight = typeof height === 'string' ? parseInt(height, 10) : height;

    const optimizedWidth = (numericWidth || 200) + 48;

    const getBase64 = file => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (e) => {
                setPreviewImage(e.target.result);
                setVisible(true)
            };
            reader.onerror = error => reject(error);
        });
    };

    const onSuccess = ({ path }: CommonObjectType) => {
        setLoading(false)
        onChange(path)
    }


    const handleCancel = () => setVisible(false);

    const handlePositionChange = position => {
        console.log(width,height,position);
        setPosition(position);
    };

    const handleRotateChange = value => {
        setRotate(value);
    };

    const handleScaleChange = value => {
        setScale(value);
    };

    const handleUpload = () => {
        // 裁剪图片
        const canvas = editorRef.current.getImageScaledToCanvas();
        const croppedImage = canvas.toDataURL();

        var param = {}
        param["fileType"] = "aaa";
        param["fileValue"] = croppedImage;

        $axios
            .post(action, param)
            .then((res) => {
                onSuccess(res)
            })
            .catch(err => {
                console.log(err);
            })
        // 关闭裁剪对话框
        setVisible(false);
    };


    const beforUpload = (file) => {
        const isType = accept.some((item: string) => file.type.includes(item))
        const isSize = file.size / 1024 / 1024 < size
        if (!isType || !isSize) {
            message.error('请上传正确文件')
            return false
        }

        if (!file.url && !file.preview) {
            getBase64(file);
        }
        return false;
    }

    return (
        <>
            <Upload
                className="avatar-uploader"
                listType="picture-card"
                beforeUpload={beforUpload}
                onPreview={handlePreview}
                showUploadList={false}
            >
                {value ? (
                    <img alt="" src={value} style={{ maxWidth: '100%' }} />
                ) : (
                    uploadButton
                )}
            </Upload>
            <Modal
                visible={visible}
                width={optimizedWidth}
                title="选择图片"
                onCancel={handleCancel}
                onOk={handleUpload}
            >
                <AvatarEditor
                    ref={editorRef}
                    image={previewImage}
                    border={1}
                    width={(numericWidth || 200)}
                    height={(numericHeight||300)}
                    rotate={rotate}
                    scale={scale}
                    position={position}
                    onPositionChange={handlePositionChange}
                />
                <div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <label style={{ marginRight: '5px' }}>旋转：</label>
                        <Slider
                            min={0}
                            max={360}
                            value={rotate}
                            onChange={handleRotateChange}
                            style={{ flex: 1, width: '100%' }}
                        />
                    </div>
                </div>
                <div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <label style={{ marginRight: '5px' }}>缩放：</label>
                        <Slider
                            min={0.5}
                            defaultValue={1}
                            max={3}
                            step={0.01}
                            value={scale}
                            onChange={handleScaleChange}
                            style={{ flex: 1, width: '100%' }}
                        />
                    </div>
                </div>
            </Modal>
        </>
    )
}
ImgUpload.defaultProps={
    width:320,
    height:240
}

export default ImgUpload
