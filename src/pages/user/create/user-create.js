import { Flex } from '@chakra-ui/react';
import { ButtonCreate, ButtonEdit, DatePicker, FieldLabel, Input, Select, UploadImage } from 'components/form';
import { useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

const UserCreate = () => {
  const params = useParams();
  const { id } = params;
  const methods = useForm();
  const { handleSubmit } = methods;

  const genderOptions = [
    {
      value: 'MALE',
      label: 'Nam'
    },
    {
      value: 'FEMALE',
      label: 'Nữ'
    }
  ];

  const onSubmit = useCallback((data) => {
    console.log(data);
  }, []);

  return (
    <Flex py={10}>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
          <Flex w={{ xs: 'full', md: 2 / 3, lg: 1 / 3 }} direction="column" mx="auto" gap={10}>
            <Flex direction="column">
              <FieldLabel title="Ảnh đại diện" />
              <UploadImage />
            </Flex>

            <Flex direction="column">
              <FieldLabel title="Họ và tên" isRequired />
              <Input />
            </Flex>

            <Flex direction="column">
              <FieldLabel title="Giới tính" isRequired />
              <Select options={genderOptions} defaultValue={genderOptions[0]} />
            </Flex>

            <Flex direction="column">
              <FieldLabel title="Ngày sinh" />
              <DatePicker />
            </Flex>

            <Flex direction="column">
              <FieldLabel title="Email" />
              <Input />
            </Flex>

            <Flex direction="column">
              <FieldLabel title="Số điện thoại" />
              <Input />
            </Flex>

            <Flex direction="column">
              <FieldLabel title="Địa chỉ" />
              <Input />
            </Flex>

            <Flex justify="center" my={5}>
              {id ? <ButtonEdit /> : <ButtonCreate />}
            </Flex>
          </Flex>
        </form>
      </FormProvider>
    </Flex>
  );
};

export default UserCreate;
