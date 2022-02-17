
const Validation = (values) => {
    let errors={};
    if(!values.name){
        errors.name="Name is required!"
    }
    if(!values.email){
        errors.name="Email is required!"
    }else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email="Email is invalid!"
    }
    if(!values.password){
        errors.password="Password is required!"
    }else if(values.password.length < 7){
        errors.password="Password must be more that 7 characters."
    }
    return errors;
}

export default Validation;
