import React, { FC, useState } from "react";
import { Input } from "antd";
import bbsArticleInfoApi from "@/api/bbs/bbsArticleInfo";
import MyPage from "@/components/common/myPage";

const BbsArticleInfo: FC = () => {
    const [selectRow, setSelectRow] = useState(Object);
    const [selectKeys, setSelectKeys] = useState([]);
    // 搜索栏配置项
    const searchConfigList = [
        {
            key: "articleId",
            slot: <Input placeholder="文章ID" allowClear />,
            rules: [],
            initialValue: "",
        },
        {
            key: "articleType",
            slot: <Input placeholder="文章类型" allowClear />,
            rules: [],
            initialValue: "",
        },
        {
            key: "articleTitle",
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
            key: "remark",
            slot: <Input placeholder="备注" allowClear />,
            rules: [],
            initialValue: "",
        },
        {
            key: "columnId",
            slot: <Input placeholder="专题标签" allowClear />,
            rules: [],
            initialValue: "",
        },
        {
            key: "labelId",
            slot: <Input placeholder="文章标签" allowClear />,
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
    const columns = [
        {
            title: "文章ID",
            key: "articleId",
            dataIndex: "articleId",
        },

        {
            title: "文章类型",
            key: "articleType",
            dataIndex: "articleType",
        },

        {
            title: "文章名称",
            key: "articleTitle",
            dataIndex: "articleTitle",
        },

        {
            title: "作者ID",
            key: "userId",
            dataIndex: "userId",
        },

        {
            title: "备注",
            key: "remark",
            dataIndex: "remark",
        },

        {
            title: "专题标签",
            key: "columnId",
            dataIndex: "columnId",
        },

        {
            title: "文章标签",
            key: "labelId",
            dataIndex: "labelId",
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
            <MyPage
                apiFun={bbsArticleInfoApi.queryByPage}
                columns={columns}
                permissionPrefix={"user:list"}
                addApiFun={bbsArticleInfoApi.add}
                editApiFun={bbsArticleInfoApi.edit}
                delApiFun={bbsArticleInfoApi.deleteById}
                showOpeation={true}
                searchConfigList={searchConfigList}
            />
        </>
    );
};
export default BbsArticleInfo;
