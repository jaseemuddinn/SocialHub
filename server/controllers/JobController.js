const axios = require('axios');

const fetchJobs = async () => {
    const options = {
        method: 'GET',
        url: 'https://jobs-api14.p.rapidapi.com/list',
        params: {
            query: 'Web Developer',
            location: 'India',
            distance: '1.0',
            language: 'en_GB',
            remoteOnly: 'false',
            datePosted: 'month',
            employmentTypes: 'fulltime;parttime;intern;contractor',
            index: '0'
        },
        headers: {
            'X-RapidAPI-Key': '6d9d2d8ef2msha2fddd9c7c1bbccp12cbeejsn008ff907bff9',
            'X-RapidAPI-Host': 'jobs-api14.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        throw error;
    }
};

const jobs = async (req, res) => {
    try {
        const jobs = await fetchJobs();
        res.status(200).json(jobs);
    } catch (error) {
        // console.error(error);
        res.status(200).send("API may be down. Please try again later.");
    }
};

module.exports = {
    jobs
};


// const axios = require('axios');

// const fetchJobs = async () => {
//     const url = 'https://api.coresignal.com/cdapi/v1/linkedin/job/search/filter';
//     const data = {
//         "title": "(Software Engineer) OR (Product Manager) OR (Project Manager) OR (HR Manager) OR (Sales Representative)",
//         "application_active": true,
//         "deleted": false
//     };
//     const customHeaders = {
//         "Content-Type": "application/json",
//         "Authorization": "Bearer eyJhbGciOiJFZERTQSIsImtpZCI6ImVjZGI0Y2FmLTBmOTAtMjA1MS04NWFkLWZlNDVkY2MxMDhkMCJ9.eyJhdWQiOiJkZWxoaXRlY2huaWNhbGNhbXB1cyIsImV4cCI6MTc0MDAxODU5NywiaWF0IjoxNzA4NDYxNjQ1LCJpc3MiOiJodHRwczovL29wcy5jb3Jlc2lnbmFsLmNvbTo4MzAwL3YxL2lkZW50aXR5L29pZGMiLCJuYW1lc3BhY2UiOiJyb290IiwicHJlZmVycmVkX3VzZXJuYW1lIjoiZGVsaGl0ZWNobmljYWxjYW1wdXMiLCJzdWIiOiJmYTBjNGM5Yy1jMjFjLWZmZGYtYzBiOS00OGFlZDVhZjljMTYiLCJ1c2VyaW5mbyI6eyJzY29wZXMiOiJjZGFwaSJ9fQ.oQ-bi2N500Gb4ZjIGsmlQT_dogYCxnr8wu0mANRkrzr5JbTGiILnljOj0aN8gcn2jvbysT1NSuandM7s8WhKDw"
//     };

//     try {
//         const response = await axios.post(url, data, {
//             headers: customHeaders
//         });

//         return response.data;
//     } catch (error) {
//         console.error(error);
//     }
// };

// const jobs = async (req, res) => {
//     try {
//         const jobs = await fetchJobs();
//         res.status(200).json(jobs);
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Internal server error');
//     }
// };

// module.exports = {
//     jobs
// };
