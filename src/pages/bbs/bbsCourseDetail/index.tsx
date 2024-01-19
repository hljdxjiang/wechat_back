import React, { FC, useState } from "react";
import { Input } from "antd";
import bbsCourseDetailApi from "@/api/bbs/bbsCourseDetail";
import ViewPage from "@/components/common/viewPage";

const BbsCourseDetail: FC = () => {
    const [selectRow, setSelectRow] = useState(Object);
    const [selectKeys, setSelectKeys] = useState([]);
    // 搜索栏配置项
    const searchConfigList = [
        {
            key: "courseId",
            slot: <Input placeholder="教程ID" allowClear />,
            rules: [],
            initialValue: "",
        },
        {
            key: "partId",
            slot: <Input placeholder="章节ID" allowClear />,
            rules: [],
            initialValue: "",
        },
        {
            key: "partTitle",
            slot: <Input placeholder="章节标题" allowClear />,
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
            key: "partSummary",
            slot: <Input placeholder="摘要" allowClear />,
            rules: [],
            initialValue: "",
        },
        {
            key: "partDesc",
            slot: <Input placeholder="详细描述" allowClear />,
            rules: [],
            initialValue: "",
        },
        {
            key: "custLevel",
            slot: <Input placeholder="客户级别" allowClear />,
            rules: [],
            initialValue: "",
        },
        {
            key: "vipType",
            slot: <Input placeholder="会员类型0免费会员" allowClear />,
            rules: [],
            initialValue: "",
        },
    ];
    const columns = [
        {
            title: "教程ID",
            key: "courseId",
            dataIndex: "courseId",
        },

        {
            title: "章节ID",
            key: "partId",
            dataIndex: "partId",
        },

        {
            title: "章节标题",
            key: "partTitle",
            dataIndex: "partTitle",
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
            title: "摘要",
            key: "partSummary",
            dataIndex: "partSummary",
        },

        {
            title: "详细描述",
            key: "partDesc",
            dataIndex: "partDesc",
        },

        {
            title: "客户级别",
            key: "custLevel",
            dataIndex: "custLevel",
        },

        {
            title: "会员类型0免费会员",
            key: "vipType",
            dataIndex: "vipType",
        },
    ];
    return (
        <>
            <ViewPage
                apiFun={bbsCourseDetailApi.queryByPage}
                columns={columns}
                permissionPrefix={"user:list"}
                addApiFun={bbsCourseDetailApi.add}
                editApiFun={bbsCourseDetailApi.edit}
                delApiFun={bbsCourseDetailApi.deleteById}
                showOpeation={true}
                searchConfigList={searchConfigList}
            />
        </>
    );
};
export default BbsCourseDetail;
