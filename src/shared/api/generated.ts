/**
 * Generated by orval v6.23.0 🍺
 * Do not edit manually.
 * Taska Api
 * OpenAPI spec version: 1.0
 */
import { createInstance } from "./api-instance";
import type { BodyType } from "./api-instance";
export interface PatchTaskBodyDto {
  id: number;
  isCompleted: boolean;
  name: string;
}

export interface TaskDto {
  createdAt: string;
  id: number;
  isCompleted: boolean;
  name: string;
  ownerId: number;
}

export interface CreateTaskBodyDto {
  name: string;
  ownerId: number;
}

export interface PatchCategoryDto {
  iconPath: string;
  id: number;
  name: string;
}

export interface CategoryDto {
  iconPath: string;
  id: number;
  name: string;
  ownerId: number;
}

export interface CreateCategoryDto {
  iconPath: string;
  name: string;
}

export interface PatchAccountDto {
  userName: string;
}

export interface AccountDto {
  id: number;
  ownerId: number;
  userName: string;
}

export interface GetSessionInfoDto {
  email: string;
  exp: number;
  iat: number;
  id: number;
}

export interface SignInBodyDto {
  email: string;
  password: string;
}

export interface SignUpAccountDataBodyDto {
  userName: string;
}

export interface SignUpBodyDto {
  accountData: SignUpAccountDataBodyDto;
  email: string;
  password: string;
}

// eslint-disable-next-line
type SecondParameter<T extends (...args: any) => any> = T extends (
  config: any,
  args: infer P,
) => any
  ? P
  : never;

export const appControllerGetHello = (
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<void>({ url: `/`, method: "GET" }, options);
};

export const authControllerSignUp = (
  signUpBodyDto: BodyType<SignUpBodyDto>,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<void>(
    {
      url: `/auth/sign-up`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: signUpBodyDto,
    },
    options,
  );
};

export const authControllerSignIn = (
  signInBodyDto: BodyType<SignInBodyDto>,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<void>(
    {
      url: `/auth/sign-in`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: signInBodyDto,
    },
    options,
  );
};

export const authControllerSignOut = (
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<void>(
    { url: `/auth/sign-out`, method: "POST" },
    options,
  );
};

export const authControllerGetSessionInfo = (
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<GetSessionInfoDto>(
    { url: `/auth/session`, method: "GET" },
    options,
  );
};

export const accountControllerGetAccount = (
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<AccountDto>(
    { url: `/account`, method: "GET" },
    options,
  );
};

export const accountControllerPatch = (
  patchAccountDto: BodyType<PatchAccountDto>,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<AccountDto>(
    {
      url: `/account`,
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      data: patchAccountDto,
    },
    options,
  );
};

export const fileControllerGetImage = (
  filename: string,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<void>(
    { url: `/file/${filename}`, method: "GET" },
    options,
  );
};

export const categoryControllerCreate = (
  createCategoryDto: BodyType<CreateCategoryDto>,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<CategoryDto>(
    {
      url: `/category`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: createCategoryDto,
    },
    options,
  );
};

export const categoryControllerRemove = (
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<void>({ url: `/category`, method: "DELETE" }, options);
};

export const categoryControllerPatch = (
  patchCategoryDto: BodyType<PatchCategoryDto>,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<CategoryDto>(
    {
      url: `/category`,
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      data: patchCategoryDto,
    },
    options,
  );
};

export const categoryControllerGetAll = (
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<CategoryDto[]>(
    { url: `/category`, method: "GET" },
    options,
  );
};

export const categoryControllerGetOne = (
  id: number,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<CategoryDto>(
    { url: `/category/${id}`, method: "GET" },
    options,
  );
};

export const tasksControllerCreate = (
  createTaskBodyDto: BodyType<CreateTaskBodyDto>,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<TaskDto>(
    {
      url: `/tasks`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: createTaskBodyDto,
    },
    options,
  );
};

export const tasksControllerPatch = (
  patchTaskBodyDto: BodyType<PatchTaskBodyDto>,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<TaskDto>(
    {
      url: `/tasks`,
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      data: patchTaskBodyDto,
    },
    options,
  );
};

export const tasksControllerGetAll = (
  categoryId: number,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<TaskDto[]>(
    { url: `/tasks/${categoryId}`, method: "GET" },
    options,
  );
};

export const tasksControllerRemove = (
  id: number,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<TaskDto>(
    { url: `/tasks/${id}`, method: "DELETE" },
    options,
  );
};

export type AppControllerGetHelloResult = NonNullable<
  Awaited<ReturnType<typeof appControllerGetHello>>
>;
export type AuthControllerSignUpResult = NonNullable<
  Awaited<ReturnType<typeof authControllerSignUp>>
>;
export type AuthControllerSignInResult = NonNullable<
  Awaited<ReturnType<typeof authControllerSignIn>>
>;
export type AuthControllerSignOutResult = NonNullable<
  Awaited<ReturnType<typeof authControllerSignOut>>
>;
export type AuthControllerGetSessionInfoResult = NonNullable<
  Awaited<ReturnType<typeof authControllerGetSessionInfo>>
>;
export type AccountControllerGetAccountResult = NonNullable<
  Awaited<ReturnType<typeof accountControllerGetAccount>>
>;
export type AccountControllerPatchResult = NonNullable<
  Awaited<ReturnType<typeof accountControllerPatch>>
>;
export type FileControllerGetImageResult = NonNullable<
  Awaited<ReturnType<typeof fileControllerGetImage>>
>;
export type CategoryControllerCreateResult = NonNullable<
  Awaited<ReturnType<typeof categoryControllerCreate>>
>;
export type CategoryControllerRemoveResult = NonNullable<
  Awaited<ReturnType<typeof categoryControllerRemove>>
>;
export type CategoryControllerPatchResult = NonNullable<
  Awaited<ReturnType<typeof categoryControllerPatch>>
>;
export type CategoryControllerGetAllResult = NonNullable<
  Awaited<ReturnType<typeof categoryControllerGetAll>>
>;
export type CategoryControllerGetOneResult = NonNullable<
  Awaited<ReturnType<typeof categoryControllerGetOne>>
>;
export type TasksControllerCreateResult = NonNullable<
  Awaited<ReturnType<typeof tasksControllerCreate>>
>;
export type TasksControllerPatchResult = NonNullable<
  Awaited<ReturnType<typeof tasksControllerPatch>>
>;
export type TasksControllerGetAllResult = NonNullable<
  Awaited<ReturnType<typeof tasksControllerGetAll>>
>;
export type TasksControllerRemoveResult = NonNullable<
  Awaited<ReturnType<typeof tasksControllerRemove>>
>;
