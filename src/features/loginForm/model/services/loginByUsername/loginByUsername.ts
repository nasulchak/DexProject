import { createAsyncThunk } from '@reduxjs/toolkit';
// import { ThunkConfig } from '@/app/providers/StoreProvider';
// import { User, userActions } from '@/entities/User';
// import { AUTH_TOKEN } from 'shared/const/localStorage';
import axios from 'axios';
import { notificationActions } from 'features/notification/model/slice/notificationSlice';

interface LoginByUsernameProps {
    login: string;
    password: string;
}

interface SuccessResponse {
    name: string;
    avatarUrl: string;
    token: string;
}

interface BadRequestResponse {
    type: string;
    title: string;
    status: number;
    detail: string;
    instance: string;
}

interface UnauthorizedResponse {
    statusCode: number;
}

type LoginResponse = SuccessResponse | BadRequestResponse | UnauthorizedResponse;

export const loginByUsername = createAsyncThunk<LoginResponse, LoginByUsernameProps, { rejectValue: { error: string } }>('login/loginByUsername', async (authData, thunkAPI) => {
    try {
        const response = await axios.post<LoginResponse>('http://dev.trainee.dex-it.ru/api/Auth/SignIn', authData)

        if (response.status === 200) {
            const successData = response.data as SuccessResponse;
            thunkAPI.dispatch(notificationActions.showNotification({ message: 'Success!', type: 'success' }));
            return response.data;
        } else {
            thunkAPI.dispatch(notificationActions.showNotification({ message: 'An unknown error occurred', type: 'error' }));
            return thunkAPI.rejectWithValue({ error: 'An unknown error occurred' });
        }

    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response) {
                if (error.response.status === 400) {
                    const badRequestData = error.response.data as BadRequestResponse;
                    thunkAPI.dispatch(notificationActions.showNotification({ message: badRequestData.detail || 'Bad Request', type: 'error' }));
                    return thunkAPI.rejectWithValue({ error: (error.response.data as BadRequestResponse).detail || 'Bad Request' });
                }
                if (error.response.status === 401) {
                    thunkAPI.dispatch(notificationActions.showNotification({ message: 'Unauthorized', type: 'error' }));
                    return thunkAPI.rejectWithValue({ error: 'Unauthorized' });
                }
            }
            return thunkAPI.rejectWithValue({ error: 'Network error' });
        }
        return thunkAPI.rejectWithValue({ error: 'Error logging in' });
    }

    // const { dispatch, rejectWithValue, extra } = thunkAPI;

    // try {
    //     const response = await extra.api.post<User>('/login', authData);

    //     if (!response.data) {
    //         throw new Error();
    //     }

    //     // extra.navigation?.('/about');

    //     localStorage.setItem(
    //         AUTH_TOKEN,
    //         JSON.stringify(response.data.token),
    //     );

    //     dispatch(userActions.setAuthDate(response.data));
    //     return response.data;
    // } catch (e) {
    //     return rejectWithValue('Введен неверный логин или пароль');
    // }
});
