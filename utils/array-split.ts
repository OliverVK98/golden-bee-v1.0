import {IFrontPageItem} from "../pages/all";

const arraySplit = (arr: IFrontPageItem[]) => {
    const [var1, var2, ...rest] = arr;

    return [[var1, var2], rest];
}

export default arraySplit