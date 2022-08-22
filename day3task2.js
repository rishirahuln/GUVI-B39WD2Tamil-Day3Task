// Create your own resume data in JSON format

let resume = {
    name: "Rishi Rahul",
    phoneNumber: 9566793899,
    address: {
        doorNo: 306,
        street: "Natarajapuram",
        panchayat: "Kuruppanaickenpalayam",
        taluk: "Bhavani",
        district: "Erode",
        pincode: 638301,
        state: "Tamil Nadu"
    },
    educationalQualification: {
        SSLC: {
            markPercentage: 89.2,
            yearOfPassing: 2012,
            institutionName: "SSM Matric Hr. Sec. School, Namakkal",
        },
        HSC: {
            markPercentage: 87.2,
            yearOfPassing: 2014,
            institutionName: "SSM Matric Hr. Sec. School, Namakkal",
        },
        UG: {
            degree: "Bachelor of Engineering",
            discipline: "Civil Engineering",
            CGPA: 7.6,
            yearOfPassing: 2018,
            institutionName: "Kongu Engineering College, Erode",
        }
    },
    yearsOfExperience: 0,
    skills: ["HTML", "CSS", "JavaScript"],
    interest: ["Web Development", "Blockchain Technology"],
    languages: ["English", "Tamil", "Telugu"],
    hobbies: ["Reading newspaper", "Exploring trends in cryptocurrency"]
}

console.log(JSON.stringify(resume));