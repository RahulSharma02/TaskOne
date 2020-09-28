export default function validateInfo(values) {
    let errors = {}
    const regexEmail = RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)
    const regexNames = RegExp(/^[a-z ,.'-]+$/i)
    // let regex = /^[a-z ,.'-]+$/i;

    if (!values.fname.trim()) {
        errors.fname = "FirstName Required"
    }
    else if (values.fname.length < 2) {
        errors.fname = "Firstname must be longer than 2 alphabets"
    } else if (!regexNames.test(values.fname)) {
        errors.fname = "Enter alphabets only"
    }

    // else if (!a - zA - Z * (values.fname)) {
    //     errors.fname = "Only alphabets are allowed"
    // }
    if (!values.lname.trim()) {
        errors.lname = "LastName Required"
    } else if (values.lname.length < 2) {
        errors.lname = "LastName must be longer than 2 alphabet"
    } else if (!regexNames.test(values.lname)) {
        errors.lname = "Enter alphabets only"
    }
    //  else if (![a - zA - Z *] (values.lname)) {
    //     errors.lname = "Only alphabets are allowed"
    // }

    // email 
    if (!values.email) {
        errors.email = 'Email required';
    } else if (!/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }

    // sname

    if (!values.sname.trim()) {
        errors.sname = "Superhero Name is Required"
    } else if (values.sname.length < 2) {
        errors.sname = "Superhero must be longer than 2 alphabets"
    } else if (!regexNames.test(values.sname)) {
        errors.sname = "Enter alphabets only"
    }

    // gender
    if (!values.gender.trim()) {
        errors.gender = "Gender is Required"
    }
    // age
    if (!values.age.trim()) {
        errors.age = "Age is Required"
    }
    else if (values.age.length > 2) {
        errors.age = "Age must be under 100"
    }
    return errors;

}