"use client";

import { useForm, Controller } from "react-hook-form";
import { ArrowRightIcon, CaretDownIcon } from "@/components/Icons";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { formatPhone } from "@/utils";
import type { WhatsAppFormData } from "@/types/whatsapp";
import type { MainFormProps } from "./interfaces";
import { cargoOptions } from "@/constants/form.constants";
import { useWhatsAppLink } from "@/hooks/UseWhatsAppLink";

function inputClass(hasError: boolean): string {
  return `flex h-[45px] w-full rounded-xl border bg-white px-3 py-2 text-base text-[#1a1a1a] placeholder:text-[#636e7c] focus:outline-none focus:ring-2 transition-colors ${
    hasError
      ? "border-red-500 focus:ring-red-300"
      : "border-[#acb4bd] focus:ring-[#003d5c] focus:border-transparent"
  }`;
}

export function MainForm({ onSuccess }: MainFormProps) {
  const { submitForm, isSubmitting, submitError } = useWhatsAppLink(onSuccess);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<WhatsAppFormData>({
    defaultValues: { name: "", phone: "", position: "", message: "" },
  });

  return (
    <div className="flex flex-col gap-8 items-center w-full max-w-[838px]">
      <div className="flex flex-col gap-4 items-center w-full text-center">
        <h1 className="font-['Red_Hat_Display',sans-serif] font-bold text-4xl md:text-5xl text-black leading-[1.4]">
          Gerador de Link para WhatsApp
        </h1>
        <p className="font-['DM_Sans',sans-serif] font-normal text-lg md:text-xl text-black leading-[1.4]">
          Crie seu link de WhatsApp e inicie conversas com um clique nos seus
          canais digitais!
        </p>
      </div>

      <form
        onSubmit={handleSubmit(submitForm)}
        className="flex flex-col gap-6 w-full"
        id="gerador-form"
        noValidate
        aria-label="Formulário para gerar link do WhatsApp"
      >
        <div className="flex flex-col gap-2 w-full">
          <Label htmlFor="name" className="text-base tracking-[-0.32px]">
            Nome*
          </Label>
          <input
            id="name"
            type="text"
            placeholder="Seu nome"
            required
            aria-required="true"
            aria-describedby={errors.name ? "name-error" : undefined}
            aria-invalid={!!errors.name}
            className={inputClass(!!errors.name)}
            {...register("name", {
              required: "Nome é obrigatório",
              minLength: {
                value: 2,
                message: "Nome deve ter pelo menos 2 caracteres",
              },
            })}
          />
          {errors.name && (
            <p
              id="name-error"
              role="alert"
              className="text-red-500 text-sm mt-1"
            >
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2 w-full">
          <Label htmlFor="phone" className="text-base tracking-[-0.32px]">
            Número do WhatsApp*
          </Label>
          <Controller
            name="phone"
            control={control}
            rules={{
              required: "Número do WhatsApp é obrigatório",
              validate: (v) => {
                const digits = v.replace(/\D/g, "");
                return (
                  (digits.length >= 10 && digits.length <= 11) ||
                  "Número inválido. Use o formato (99) 99999-9999"
                );
              },
            }}
            render={({ field }) => (
              <input
                id="phone"
                type="tel"
                placeholder="(99) 99999-9999"
                required
                aria-required="true"
                aria-describedby={errors.phone ? "phone-error" : undefined}
                aria-invalid={!!errors.phone}
                className={inputClass(!!errors.phone)}
                value={field.value}
                onChange={(e) => field.onChange(formatPhone(e.target.value))}
                onBlur={field.onBlur}
                ref={field.ref}
                name={field.name}
              />
            )}
          />
          {errors.phone && (
            <p
              id="phone-error"
              role="alert"
              className="text-red-500 text-sm mt-1"
            >
              {errors.phone.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2 w-full">
          <Label htmlFor="position" className="text-base tracking-[-0.32px]">
            Cargo*
          </Label>
          <div className="relative w-full">
            <Controller
              name="position"
              control={control}
              rules={{ required: "Cargo é obrigatório" }}
              render={({ field }) => (
                <select
                  id="position"
                  required
                  aria-required="true"
                  aria-describedby={
                    errors.position ? "position-error" : undefined
                  }
                  aria-invalid={!!errors.position}
                  value={field.value}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  ref={field.ref}
                  name={field.name}
                  className={`appearance-none flex h-[45px] w-full rounded-xl border bg-white px-3 py-2 text-base focus:outline-none focus:ring-2 transition-colors cursor-pointer ${
                    !field.value ? "text-[#636e7c]" : "text-[#1a1a1a]"
                  } ${
                    errors.position
                      ? "border-red-500 focus:ring-red-300"
                      : "border-[#acb4bd] focus:ring-[#003d5c] focus:border-transparent"
                  }`}
                >
                  <option value="">Selecione seu cargo</option>
                  {cargoOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              )}
            />
            <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
              <CaretDownIcon />
            </div>
          </div>
          {errors.position && (
            <p
              id="position-error"
              role="alert"
              className="text-red-500 text-sm mt-1"
            >
              {errors.position.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2 w-full">
          <Label htmlFor="message" className="text-base tracking-[-0.32px]">
            Mensagem padrão*
          </Label>
          <Textarea
            id="message"
            placeholder="Crie uma mensagem que facilite a interação com os contatos."
            rows={4}
            required
            aria-required="true"
            aria-describedby={errors.message ? "message-error" : undefined}
            aria-invalid={!!errors.message}
            className={
              errors.message ? "border-red-500 focus:ring-red-300" : undefined
            }
            {...register("message", {
              required: "Mensagem padrão é obrigatória",
            })}
          />
          {errors.message && (
            <p
              id="message-error"
              role="alert"
              className="text-red-500 text-sm mt-1"
            >
              {errors.message.message}
            </p>
          )}
        </div>

        {submitError && (
          <p role="alert" className="text-red-500 text-sm text-center">
            {submitError}
          </p>
        )}

        <p className="font-['DM_Sans',sans-serif] font-normal text-xs text-black text-center leading-[1.4] max-w-[620px] mx-auto">
          Ao preencher o formulário, concordo *em receber comunicações de acordo
          com meus interesses. <br className="hidden sm:block" />
          Ao informar meus dados, eu concordo com a{" "}
          <a
            href="https://legal.rdstation.com/pt/privacy-policy/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[#003d5c] transition-colors"
          >
            Política de Privacidade
          </a>
          .<br className="hidden sm:block" />* Você pode alterar suas permissões
          de comunicação a qualquer tempo.
        </p>

        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isSubmitting}
            aria-busy={isSubmitting}
            className="bg-[#003d5c] flex gap-2 items-center justify-center px-6 py-3 rounded-xl cursor-pointer hover:bg-[#005580] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <span className="font-['DM_Sans',sans-serif] font-semibold text-base text-white tracking-[-0.32px] whitespace-nowrap">
              {isSubmitting ? "Gerando..." : "Gerar link grátis"}
            </span>
            {!isSubmitting && <ArrowRightIcon color="white" />}
          </button>
        </div>
      </form>
    </div>
  );
}
