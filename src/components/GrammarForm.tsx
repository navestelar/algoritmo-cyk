'use client'
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from './ui/input';
import { ArrowRight, XCircle } from '@phosphor-icons/react';
import { Button } from './ui/button';

const formularioSchema = z.object({
  expression: z.string(),
  rules: z.array(
    z.array(
      z.string().min(1),
      z.string().min(1)
    )
  )
})


type grammarProps = z.infer<typeof formularioSchema>

export function GrammarForm() {
  const { control, register, handleSubmit, setValue, watch, formState: { errors } } = useForm<grammarProps>({
    defaultValues: {rules: [['', '']]},
    resolver: zodResolver(formularioSchema)
  });

  function onSubmit(data: grammarProps) {
    const processedData = data.rules.map(([valor, valores]) => [
      valor,
      valores.split('|').map(s => s.trim())
    ]);
    console.log('Dados enviados:', processedData);
  };

  function removeField(index: number) {
    const updatedrules = rules.filter((_, i) => i !== index);
    setValue('rules', updatedrules);
  };

  const rules = watch('rules', [['', '']]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 w-[300px]'>
      <div>
        <h2 className="text-xl">Expressão</h2>
        <p className="text-xs">Verifique se a expressão pertence à gramática</p>
      </div>
      <div className="flex items-center gap-2">
        <Input {...register('expression')} />
        <Button type='submit'>Verificar</Button>
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="text-xl">Regras da gramática</h2>
        {rules.map((campo, index) => (
          <div key={index} className="flex gap-1 items-center">
            <Controller
              name={`rules.${index}.0`}
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  maxLength={1}
                  className="w-[40px]"
                  isInvalid={Boolean(errors.rules?.[index]?.[0])}
                />
              )}
            />
          
            <ArrowRight size={32} className="block" />
            
            <Controller
              name={`rules.${index}.1`}
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  isInvalid={Boolean(errors.rules?.[index]?.[1])}
                />
              )}
            />

            <Button onClick={() => removeField(index)} variant='ghost' size='icon'>
              <XCircle size={16} className="text-red-700" />
            </Button>
          </div>
        ))}
      
        <Button
          type="button"
          className="mr-7"
          onClick={() => setValue('rules', [...rules, ['', '']])}
        >
          Adicionar regra
        </Button>
      </div>
    </form>
  );
};