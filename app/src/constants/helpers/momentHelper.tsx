import moment from "moment";

/**
 * Calculate and return time with AM/PM from inputTime
 * @param inputTime 'hh:mm:ss' - string (Ex-02:49:00 or 02:49)
 * @returns 'hh:mm AM' - string (Ex-02:49 AM)
 */
export const formatTimeMeridiem = (inputTime: any) => {
    if(inputTime && inputTime?.length === 8 || inputTime?.length === 5){
        let hourVal = inputTime?.substring(0, 2);
        const minVal = inputTime?.substring(3, 5);
        const timeStatus = hourVal >= 12 ? ' PM':' AM'
        hourVal = hourVal > 12 ? hourVal-12 : hourVal;
        return ((hourVal < 10 && timeStatus === ' PM' ? '0':'') + hourVal + ":" + minVal + timeStatus)
    }
    return inputTime
}

/**
 * Calculate and return date & time with AM/PM from inputDate
 * @param inputDate any date time, will use moment to convert (Ex- 23-07-2022 10:30:20)
 * @returns 'DD-MM-YYYY' - string (Ex- 23-07-2022)
 */
 export const formatDate = (inputDate: any) => {
    if(inputDate)
        return moment(inputDate).format("DD-MM-YYYY")
    else
        return inputDate
}

/**
 * Calculate and return time only with AM/PM from inputDate
 * @param inputDate any date time, will use moment to convert (Ex- 23-07-2022 10:30:20)
 * @returns 'hh:mm AM' - string (Ex-02:49 AM)
 */
export const formatTimeOnly = (inputDateTime: any) => {
    if(inputDateTime)
        return moment(inputDateTime).format("hh:mm A")
    else
        return inputDateTime
}

/**
 * Calculate and return date & time with AM/PM from inputDateTime
 * @param inputDateTime any date time, will use moment to convert (Ex- 23-07-2022 10:30:20)
 * @returns 'DD-MM-YYYY hh:mm A' - string (Ex- 23-07-2022 10:30 AM)
 */
export const formatDateTimeMeridiem = (inputDateTime: any) => {
    if(inputDateTime)
        return moment(inputDateTime).format("DD-MM-YYYY hh:mm A")
    else
        return inputDateTime
}

/**
 * Prevent DatePicker react component from user manual input (both mouse click and tab) 
 */
export const PreventDatePickerInput = () => {
    //Target all DatePicker on page
    let elementsDD = document.getElementsByClassName('react-date-picker__inputGroup__input react-date-picker__inputGroup__day');
    let elementsMM = document.getElementsByClassName('react-date-picker__inputGroup__input react-date-picker__inputGroup__month');
    let elementsYY = document.getElementsByClassName('react-date-picker__inputGroup__input react-date-picker__inputGroup__year');
    Array.from(elementsDD).forEach((el) => {const item = el as HTMLInputElement; item.disabled = true} );
    Array.from(elementsMM).forEach((el) => {const item = el as HTMLInputElement; item.disabled = true} );
    Array.from(elementsYY).forEach((el) => {const item = el as HTMLInputElement; item.disabled = true} );
}