/**
 * Created by Administrator on 2017/3/24 0024.
 */
export function add(text) {
    return {
        type:"add",
        text
    }
}

export function minus(text) {
    return {
        type:"minus",
        text
    }
}
