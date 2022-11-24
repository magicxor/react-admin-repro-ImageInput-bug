import fakeDataStorage from './fakeDataStorage.json';
import fakeDataProvider from 'ra-data-fakerest';

export const fakeJsonDataProvider = fakeDataProvider({
    user: fakeDataStorage.user,
});
