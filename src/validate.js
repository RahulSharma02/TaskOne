export default function validateInfo(values) {
    let errors = {}
    // let regex = /^[a-z ,.'-]+$/i;

    if (!values.fname.trim()) {
        errors.fname = "FirstName Required"
    } else if (/^[a-z ,.'-]+$/i.test(values.fname)) {
        errors.fname = "Only english alphabets are allowed"
    }
    else if (values.fname.length < 2) {
        errors.fname = "Firstname must be longer than 2 alphabets"
    }

    // else if (!a - zA - Z * (values.fname)) {
    //     errors.fname = "Only alphabets are allowed"
    // }
    if (!values.lname.trim()) {
        errors.lname = "LastName Required"
    } else if (values.lname.length < 2) {
        errors.lname = "LastName must be longer than 2 alphabet"
    } else if (/^[A-Za-z]+$/.test(values.fname)) {
        errors.lname = "Enter alphabets only"
    }
    //  else if (![a - zA - Z *] (values.lname)) {
    //     errors.lname = "Only alphabets are allowed"
    // }

    // email 
    if (!values.email) {
        errors.email = "Email required"
    }
    else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }

    // sname

    if (!values.sname.trim()) {
        errors.sname = "Superhero Name is Required"
    } else if (values.sname.length < 2) {
        errors.sname = "Superhero must be longer than 2 alphabets"
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