export const menuData = [{
    label: '发现音乐',
    children: [{
        label: '推荐',
    }, {
        label: '排行榜',
    }, {
        label: '歌单',
    }, {
        label: '主播电台',
    }, {
        label: '歌手',
    }, {
        label: '新碟上架',
    }, ]
}, {
    label: '我的音乐'
}, {
    label: '朋友'
}, {
    label: '商城'
}, {
    label: '音乐人'
}, {
    label: '下载客户端'
}, ];

type Item = {
    label: string
    children?: string[]
}
export type menuData = Item[];