import i18next from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {},
  },
  ru: {
    translation: {
      // COMMON

      // AUTH
      auth_title: "Войти в аккаунт",
      auth_description: "Введите ваш E-mail и пароль, чтобы начать использовать все преимущества платформы:",
      login: "Вход",
      registration: "Регистрация",

      // AUTH: REGISTRATION FORM
      apply_generated_password: "Применить сгенерированный пароль",
      email_address_field_placeholder: "Адрес эл. почты",
      email_address_field_title: "E-mail",
      password_address_field_placeholder: "Укажите ваш пароль",
      password_address_field_title: "Придумайте пароль",
      password_confirmation_address_field_placeholder: "Повторите ваш пароль",
      password_confirmation_address_field_title: "Повторите пароль",
      registration_button_text: "Зарегистрироваться",
      social_networks_login_description: "Или войдите с помощью",

      benefits: [
        "Автоматизация HR",
        "Интеграция с job-порталами",
        "Оценка персонала",
        "Синхронизация с Outlook",
        "Безопасность данных",
        "Парсинг резюме",
        "Мультиязычность",
        "Конструктор отчетности",
      ],
    },
  },
  ua: {
    translation: {},
  },
};

i18next
  .use(initReactI18next)
  .init({
    resources,
    lng: "ru",
    interpolation: {
      escapeValue: false,
    },
    fallbackLng: 'ru'
  });

export default i18next;
