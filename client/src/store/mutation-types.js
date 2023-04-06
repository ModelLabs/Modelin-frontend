// mutations函数操作定义
export const CHANGE_SIMULATING = 'CHANGE_SIMULATING'
//画布相关
export const INIT_GRAPH = 'INIT_GRAPH'
export const ZOOM_GRAPH = 'ZOOM_GRAPH'
export const POSITIONING_GRAPH = 'POSITIONING_GRAPH'
export const UNDO_GRAPH = 'UNDO_GRAPH'
export const REDO_GRAPH = 'REDO_GRAPH'
export const STORAGE_GRAPH = 'STORAGE_GRAPH'
export const LOAD_GRAPH = 'LOAD_GRAPH'
export const MODIFY_GRAPH = "MODIFY_GRAPH"
export const CLEAR_GRAPH = "CLEAR_GRAPH"
export const MODIFY_CONFIGDATA = "MODIFY_CONFIGDATA"
export const LOAD_CONFIGDATA = "LOAD_CONFIGDATA"

//模型上传  TODO移除该部分相关内容
export const SHOW_UPLOAD_DIALOG = "SHOW_UPLOAD_DIALOG"
export const CLOSE_UPLOAD_DIALOG = "CLOSE_UPLOAD_DIALOG"

//测算相关
export const LOAD_HISTORY_SIMULATE_DATA = "LOAD_HISTORY_SIMULATE_DATA"
export const MODIFY_HISTORY_SIMULATE_DATA = "MODIFY_HISTORY_SIMULATE_DATA"
export const APPEND_HISTORY_SIMULATE_DATA = "APPEND_HISTORY_SIMULATE_DATA"
export const SET_HISTORY_SIMULATE_DATA = "SET_HISTORY_SIMULATE_DATA"
export const CLEAR_HISTORY_SIMULATE_DATA = "CLEAR_HISTORY_SIMULATE_DATA"

export const UPDATE_HISTORY_DATA_FROM_INDEXDB = "UPDATE_HISTORY_DATA_FROM_INDEXDB"
// 设置测算次数
export const SET_NONCE = "SET_NONCE";
//设置测算模型对象的实例
export const SET_MODEL = "SET_MODEL"
export const REMOVE_CELLS = "REMOVE_CELLS"
export const SET_EDIT_CELLS = "SET_EDIT_CELLS"

//WEB3相关
export const SET_WEB3_PROVIDER = "SET_WEB3_PROVIDER"
export const SET_USER = "SET_USER"
export const SET_USER_EMAIL = "SET_USER_EMAIL"


export const SET_EDIT_RULE = "SET_EDIT_RULE"
export const SAVE_EDIT_RULE = "SAVE_EDIT_RULE"
export const LOAD_RULE_LISTS = "LOAD_RULE_LISTS"

// Property Check Result
export const APPEND_PROPERTY_CHECK_RESULT = "APPEND_PROPERTY_CHECK_RESULT"

//Chart Marker
export const SET_CHART_MARKER = "SET_CHART_MARKER"

export const SET_MARKER_ARRAY = "SET_MARKER_ARRAY"
export const PUSH_MARKER_ARRAY = "PUSH_MARKER_ARRAY"
export const SET_TMP_MARKER_ARRAY = "SET_TMP_MARKER_ARRAY"

export const VISUAL_PANEL_VISIBLE = "VISUAL_PANEL_VISIBLE"
export const MINT_PANEL_VISIBLE = "MINT_PANEL_VISIBLE"
export const CLEAR_MINT_NODES = "CLEAR_MINT_NODES"
export const CLEAR_MINT_EDGES = "CLEAR_MINT_EDGES"
export const CLEAR_SELECT_NODES_DATA = "CLEAR_SELECT_NODES_DATA"
export const CLEAR_SELECT_VISUAL_DATA = "CLEAR_SELECT_VISUAL_DATA"
export const CLEAR_SELECT_PROPERTY_DATA = "CLEAR_SELECT_PROPERTY_DATA"
export const ADD_MINT_NODES = "ADD_MINT_NODES"
export const ADD_MINT_EDGES = "ADD_MINT_EDGES"
export const ADD_SELECT_NODES_DATA = "ADD_SELECT_NODES_DATA"
export const ADD_SELECT_VISUAL_DATA = "ADD_SELECT_VISUAL_DATA"
export const ADD_SELECT_PROPERTY_DATA = "ADD_SELECT_PROPERTY_DATA"

// V2:
export const ADD_INDEX = "ADD_INDEX"
export const CLEAR_INDEX_LIST = "CLEAR_INDEX_LIST"
export const SET_MINT_NODES = "SET_MINT_NODES"
export const SET_MINT_EDGES = "SET_MINT_EDGES"
export const SET_SELECT_MODEL_DATA = "SET_SELECT_MODEL_DATA"
export const SET_SELECT_VISUAL_DATA = "SET_SELECT_VISUAL_DATA"
export const SET_SELECT_PROPERTY_DATA = "SET_SELECT_PROPERTY_DATA"