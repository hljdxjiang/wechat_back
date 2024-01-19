import React, { FC, useState } from "react";
import { Input } from "antd";
import bbsCommentInfoApi from "@/api/bbs/bbsCommentInfo";
import ViewPage from "@/components/common/viewPage";
import { SearchColumn, TableColumn } from '@/app_models/user';

const BbsCommentInfo: FC = () => {
    const [selectRow, setSelectRow] = useState(Object);
    const [selectKeys, setSelectKeys] = useState([]);
    // 搜索栏配置项
    const searchConfigList:SearchColumn[] = [
        {
            key: "commentPid",
            slot: <Input placeholder="消息父ID" allowClear />,
            rules: [],
            initialValue: "",
        },
        {
            key: "commentId",
            slot: <Input placeholder="消息ID" allowClear />,
            rules: [],
            initialValue: "",
        },
        {
            key: "commentType",
            slot: <Input placeholder="消息类型" allowClear />,
            rules: [],
            initialValue: "",
        },
        {
            key: "commentDesc",
            slot: <Input placeholder="文章名称" allowClear />,
            rules: [],
            initialValue: "",
        },
        {
            key: "userId",
            slot: <Input placeholder="作者ID" allowClear />,
            rules: [],
            initialValue: "",
        },
        {
            key: "status",
            slot: (
                <Input placeholder="状态0草稿1审核中8审核拒绝9审核通过" allowClear />
            ),
            rules: [],
            initialValue: "",
        },
        {
            key: "articleContent",
            slot: <Input placeholder="文章详情" allowClear />,
            rules: [],
            initialValue: "",
        },
    ];
    const columns:TableColumn[] = [
        {
            title: "消息父ID",
            key: "commentPid",
            dataIndex: "commentPid",
        },

        {
            title: "消息ID",
            key: "commentId",
            dataIndex: "commentId",
        },

        {
            title: "消息类型",
            key: "commentType",
            dataIndex: "commentType",
        },

        {
            title: "文章名称",
            key: "commentDesc",
            dataIndex: "commentDesc",
        },

        {
            title: "作者ID",
            key: "userId",
            dataIndex: "userId",
        },

        {
            title: "状态0草稿1审核中8审核拒绝9审核通过",
            key: "status",
            dataIndex: "status",
        },

        {
            title: "文章详情",
            key: "articleContent",
            dataIndex: "articleContent",
        },
    ];
    return (
        <>
            <ViewPage
                apiFun={bbsCommentInfoApi.queryByPage}
                columns={columns}
                permissionPrefix={"user:list"}
                addApiFun={bbsCommentInfoApi.add}
                editApiFun={bbsCommentInfoApi.edit}
                delApiFun={bbsCommentInfoApi.deleteById}
                showOpeation={true}
                searchConfigList={searchConfigList}
            />
        </>
    );
};
export default BbsCommentInfo;
