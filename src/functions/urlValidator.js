
export const makeHttpRequestUrl = (domain, paths, method = GET , body) => {
    
    let pathList = paths.trim().split(' ') || [];

    let urlPath = `${domain}/${pathList.join('/')}`;

    switch(method) {
        case 'GET': {
            if(Object.keys(body).length == 0) {
                return urlPath;
            }

            let objArr = Object.keys(body);
            let finalString = [];
            for(let i = 0; i < objArr.length; i++) {
                finalString.push(`${objArr[i]}=${body[objArr[i]]}`);
            }
            let finalRequestUrl = `${urlPath}?${finalString.join('&')}`;
            return finalRequestUrl;
        }
        case 'POST':
        case 'PUT': {
            if(Object.keys(body).length == 0 || body === undefined || body === null) {
                return 'Enter a body';
            }
            return urlPath;
        }
    }

}
