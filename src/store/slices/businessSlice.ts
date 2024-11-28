import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Business } from '../../types/business';

interface BusinessState {
  businesses: Business[];
  selectedBusiness: Business | null;
  loading: boolean;
  error: string | null;
}

const initialState: BusinessState = {
  businesses: [],
  selectedBusiness: null,
  loading: false,
  error: null,
};

const businessSlice = createSlice({
  name: 'business',
  initialState,
  reducers: {
    setBusinesses: (state, action: PayloadAction<Business[]>) => {
      state.businesses = action.payload;
    },
    setSelectedBusiness: (state, action: PayloadAction<Business>) => {
      state.selectedBusiness = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setBusinesses, setSelectedBusiness, setLoading, setError } =
  businessSlice.actions;
export default businessSlice.reducer;