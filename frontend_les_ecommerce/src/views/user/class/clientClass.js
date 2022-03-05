



export class ClientClass {


    email = '';
    password = '';
    confirmPassword = '';
    name = '';
    gender = '';
    birthDate = '';
    type = '';
    areaCode = '';
    phoneNumber = '';
    cpf = '';

    constructor(email, password, confirmPassword, name, gender, birthDate, type,
                areCode,phoneNumber,cpf){
        this.email = email;
        this.password = password;
        this.confirmPassword = confirmPassword;
        this.name = name;
        this.gender = gender;
        this.birthDate = birthDate;
        this.type = type;
        this.areaCode = areCode;
        this.phoneNumber = phoneNumber;
        this.cpf = cpf;
    }        
}