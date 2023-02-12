import { Box } from '@chakra-ui/react';
import { Input } from 'components/form';
import dayjs from 'dayjs';
import { memo, useState } from 'react';
import ReactDatePicker from 'react-datepicker';

const DatePicker = () => {
  const [selected, setSelected] = useState(dayjs().get('date'));
  return (
    <Box className="cms-date-picker">
      <ReactDatePicker
        selected={selected}
        onChange={(date) => setSelected(date)}
        customInput={<Input />}
        showYearDropdown
        showMonthDropdown
        dateFormat="dd/MM/yyyy"
      />
    </Box>
  );
};

export default memo(DatePicker);
