color_trigger = () => {
    if (document.getElementsByName("last_name")[0].style.borderColor == 'red') {
        document.getElementsByName("last_name")[0].style.borderColor = '';
    } else if (document.getElementsByName("first_name")[0].style.borderColor == 'red') {
        document.getElementsByName("first_name")[0].style.borderColor = '';
    } else if (document.getElementsByName("second_name")[0].style.borderColor == 'red') {
        document.getElementsByName("second_name")[0].style.borderColor = '';
    } else if (document.getElementsByName("city")[0].style.borderColor == 'red') {
        document.getElementsByName("city")[0].style.borderColor = '';
    } else if (document.getElementsByName("number_office")[0].style.borderColor == 'red') {
        document.getElementsByName("number_office")[0].style.borderColor = '';
    }
};

document.getElementById("page").onclick = () => {
    setTimeout('color_trigger()', 5000)
};


location_office = location => {
    address = [
        {
            number: "1",
            address: "test address 1"
        },
        {
            number: "2",
            address: "test  test address 22",
        },
        {
            number: "3",
            address: "test address 33 / 3"
        },
        {
            number: "4",
            address: "test address for test 44 / 44"
        },
        {
            number: "5",
            address: "5 test address 5"
        },
        {
            number: "6",
            address: "test 6 test 6 address 666"
        },
        {
            number: "7",
            address: "hello world address 7"
        },
        {
            number: "8",
            address: "8 house 8"
        }
    ]

    for (num = 0; num < address.length; num++) {
        if (location.value == address[num].number) {
            document.getElementsByName("address_office")[0].value = address[num].address;
        }
    }
};


validate = (form) => {
    result = {
        last_name: "",
        first_name: "",
        second_name: "",
        counter1: "",
        counter2: "",
        city: "",
        number_office: "",
        address_office: ""
    };

    if (form.last_name.value == "" || /[^a-zA-z]/.test(form.last_name.value)) {
        document.getElementsByName("last_name")[0].style.borderColor = "red";

    } else if (form.first_name.value == "" || /[^a-zA-z]/.test(form.first_name.value)) {
        document.getElementsByName("first_name")[0].style.borderColor = "red";
    } else if (form.second_name.value == "" || /[^a-zA-z]/.test(form.second_name.value)) {
        document.getElementsByName("second_name")[0].style.borderColor = "red";
    } else if (form.city.value == "") {
        document.getElementsByName("city")[0].style.borderColor = "red";
    } else if (form.number_office.value == "") {
        document.getElementsByName("number_office")[0].style.borderColor = "red";
    } else {
        result.last_name = form.last_name.value
        result.first_name = form.first_name.value
        result.second_name = form.second_name.value
        result.counter1 = document.getElementsByName("counter1")[0].checked
        result.counter2 = document.getElementsByName("counter2")[0].checked
        result.city = form.city.value
        result.number_office = form.number_office.value
        result.address_office = form.address_office.value

    };
    setTimeout(console.log(result), 10000);
    return false
};
