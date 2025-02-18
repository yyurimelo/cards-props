import {
  Form,
  FormControl, FormField,
  FormItem,
  FormLabel
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from "@/components/ui/input";

const schema = z.object({
  name: z.string(),
  email: z.string(),
  document: z.string(),
})

type Schema = z.infer<typeof schema>;

export function FormNextStep() {

  const form = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      document: '',
    },
  });

  return(
    <Form {...form}>
      <form>
      <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input placeholder="Nome" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}
