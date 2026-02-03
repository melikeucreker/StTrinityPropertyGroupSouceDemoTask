export const randomData = {

    randomString(length = 6) {
        const chars = 'abcdefghijklmnopqrstuvwxyz';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += chars[Math.floor(Math.random() * chars.length)];
        }
        return result;
    },

    randomZip() {
        return Math.floor(10000 + Math.random() * 90000).toString();
    }

};