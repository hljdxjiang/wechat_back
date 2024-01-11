import React, { FC, useRef, useState } from 'react'
import {  Modal, Slider, Upload } from 'antd'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import $axios from '@/utils/axios'
import AvatarEditor from 'react-avatar-editor';

interface Props {
    onChange?: (arg0: string) => void;
    value?: string;
    accept?: string[];
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
        accept = ['jpg', 'jpeg', 'png', 'gif'],
        size = 15,
        action = 'fileUpload/uploadFile'
    } = props

    const uploadButton = loading ? <LoadingOutlined /> : <PlusOutlined />

    const handlePreview = async file => {
        if (!file.url && !file.preview) {
            getBase64(file);
        }
    };

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
                title="Crop Image"
                onCancel={handleCancel}
                onOk={handleUpload}
            >
                <AvatarEditor
                    ref={editorRef}
                    image={previewImage}
                    border={50}
                    rotate={rotate}
                    scale={scale}
                    position={position}
                    onPositionChange={handlePositionChange}
                />
                <div>
                    <label>旋转：</label>
                    <Slider min={0} max={360} value={rotate} onChange={handleRotateChange} />
                </div>
                <div>
                    <label>缩放：</label>
                    <Slider min={1} max={2} step={0.01} value={scale} onChange={handleScaleChange} />
                </div>
            </Modal>
        </>
    )
}

export default ImgUpload
