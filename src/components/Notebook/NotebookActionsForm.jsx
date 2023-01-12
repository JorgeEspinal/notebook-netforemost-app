import {
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  FormErrorMessage,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const NotebookActionsForm = (props) => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      title: props.notebook?.title,
      date: props.notebook?.date
        ? new Date(props.notebook.date).toISOString().substring(0, 16)
        : '',
      body: props.notebook?.body,
    },
  });

  const onSubmit = (values) => {
    if (props.action === 'edit') props.onEdit(values);

    if (props.action === 'new') props.onCreate(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack>
        <FormControl isInvalid={errors.title} required>
          <FormLabel htmlFor="title">Title</FormLabel>
          <Input
            id="title"
            placeholder="Title"
            {...register('title', {
              required: 'This is required',
              minLength: {
                value: 4,
                message: 'Minimum length should be 4',
              },
            })}
          />
          <FormErrorMessage>
            {errors.title && errors.title.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.date} required>
          <FormLabel htmlFor="date">Date</FormLabel>
          <Input
            placeholder="Select Date and Time"
            id="date"
            size="lg"
            type="datetime-local"
            {...register('date', {
              required: 'This is required',
            })}
          />
          <FormErrorMessage>
            {errors.date && errors.date.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.body}>
          <FormLabel htmlFor="body">Body</FormLabel>
          <Textarea
            id="body"
            placeholder="Body"
            {...register('body', {
              required: 'This is required',
              minLength: {
                value: 4,
                message: 'Minimum length should be 4',
              },
            })}
          />
          <FormErrorMessage>
            {errors.body && errors.body.message}
          </FormErrorMessage>
        </FormControl>
        <ButtonGroup variant="outline" spacing="4">
          <Button colorScheme="blue" type="submit" isLoading={isSubmitting}>
            {props.action === 'edit' ? 'Edit' : 'Create'}
          </Button>
          <Button onClick={() => navigate('/')}>Cancel</Button>
        </ButtonGroup>
      </VStack>
    </form>
  );
};

export default NotebookActionsForm;
