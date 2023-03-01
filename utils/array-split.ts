import {IFrontPageItem} from "../pages/all";

const arraySplit = (arr: IFrontPageItem[]) => {
    if (!arr) {
        return [[], []];
    }

    const [var1, var2, ...rest] = arr;

    return [[var1, var2], rest];
}

export default arraySplit