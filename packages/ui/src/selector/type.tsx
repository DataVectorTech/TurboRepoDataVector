type optionDto = {
    label : string | number,
    value : string | number 
}

export type SelectorProp = {
    selectTagStyle? :  string,
    selectTagFrameStyle? :  string,
    options : optionDto[],
    selected? : string | number,
    onChangeHandler : Function
}