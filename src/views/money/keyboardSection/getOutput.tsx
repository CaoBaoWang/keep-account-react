const getOutput = (text: string, output: string) => {
    switch (text) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            if (output === '0') {
                return text
            } else {
                return output + text;
            }
        case '删除':
            if (output.length > 1) {
                return output.substr(0, output.length - 1)
            } else {
                return ''
            }
        case '.':
            if (output.indexOf('.') > 0) {
                return output
            } else if (output === '0') {
                return '0.'
            } else {
                return output + '.'
            }

        // case '清空':
        default:
            return ''
    }
}
export {getOutput}
