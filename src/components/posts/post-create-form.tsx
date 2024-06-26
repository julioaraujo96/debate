'use client';

import { useFormState } from 'react-dom';
import {
  Input,
  Button,
  Textarea,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@nextui-org/react';
import * as actions from '@/actions';
import FormButton from '../common/form-button';

interface PostCreateFormProps {
  slug: string;
}

export default function PostCreateForm({ slug }: PostCreateFormProps) {
  const [formState, action] = useFormState(
    actions.createPost.bind(null, slug),
    {
      errors: {},
    }
  );

  return (
    <Popover placement='left'>
      <PopoverTrigger>
        <Button color='primary'>Create a Post</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className='flex flex-col gap-4 p-4 w-80'>
            <h3 className='text-lg'>Create a Post</h3>

            <Input
              name='title'
              label='title'
              labelPlacement='outside'
              placeholder='Title'
              isInvalid={!!formState.errors.title?.join(', ')}
              errorMessage={formState.errors.title?.join(', ')}
            />
            <Textarea
              name='content'
              label='content'
              labelPlacement='outside'
              placeholder='Content'
              isInvalid={!!formState.errors.content?.join(', ')}
              errorMessage={formState.errors.content?.join(', ')}
            />

            {formState.errors._form ? (
              <div className='p-2 border border-red-400 rounded text-red-400'>
                {formState.errors._form?.join(', ')}
              </div>
            ) : null}

            <FormButton>Create</FormButton>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}
