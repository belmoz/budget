import { IBudget, IChannel } from "../types/channel.interface";

// <arrays> ===========================================================================================
export const monthes = {
    en: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
    ]
}
export const budget_frequency = [
    'Annually',
    'Quarterly',
    'Monthly',
]

export const budget_allocation = [
    'Equal',
    'Manual'
]
// </arrays> ==========================================================================================
// <STYLES> ===========================================================================================
// <media width> ===========================================================================================
export const mw_cont = 1440;
export const mw_sm = 425;
// </media widths> ==========================================================================================
// <sizes> ===========================================================================================
export const field_height = 40;
export const tableWidth = {
    item: {
        sumWidth() {
            return this.width + this.marginR;
        },
        width: 80,
        marginR: 32
    }
}
// </sizes> ==========================================================================================
// <colors> ===========================================================================================
// fonts
export const f_color_btn = '#707EA7';
export const f_color_topp = '#182033';
export const f_color_tab_a = '#000000';
export const f_color_tab = '#7E7E7E';
export const f_color_descr = '#99A4C2';
export const f_color_disabled = '#99A4C2';
export const f_color_channel = '#222A41';
export const f_color_annot = '#2F3B66';
export const f_color_annot2 = '#97A4C8';
export const f_color_val = '#2A3558';
// backgrounds
export const bg_color_light = '#FFFFFF';
export const bg_color_dark = '#F6F7FB';
export const bg_color_button = 'linear-gradient(360deg, #FAFAFC 0%, #FFFFFF 100%)';
export const bg_color_hover = 'rgba(178,187,213,0.2)';
//shadows
export const bg_shadow = '0px 1px 2px #E6E8F0';
//borders
export const bd_color_dark = '1px solid rgba(178, 187, 213, 0.5)';
export const bd_color_dark_active = '1px solid rgba(178, 187, 213, 0.7)';
// </colors> ==========================================================================================

// </STYLES> ==========================================================================================
// <functions> ===========================================================================================
export const counterBudget = (budget: number, setValue: (value: number) => void, frequency: string) => {
    frequency === 'Annually' && setValue(+budget.toFixed(2))
    frequency === 'Quarterly' && setValue(+(budget / 4).toFixed(2))
    frequency === 'Monthly' && setValue(+(budget / 12).toFixed(2))
}
export const summaryBudget = (budget: IBudget[]) => {
    let sum = 0;
    budget.forEach(el => sum += el.sum)
    return sum;
}
export const removeNonNumeric = (value: string) => {
    return +value.toString().replace(/[^0-9]/g, "")
};
export const addSplitter = (value: number) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
};
export const date = new Date().toLocaleString("en-US", {
    year: '2-digit',
});
export const getLocalStorage = (key: string) => {
    return JSON.parse(localStorage.getItem(key)!);
}
export const setLocalStorage = (key: string, data: any) => {
    localStorage.setItem(key, JSON.stringify(data));
}
// export const
// </functions> ==========================================================================================
// <TEMP> ===========================================================================================

// </TEMP> ==========================================================================================