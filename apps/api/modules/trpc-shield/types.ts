/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-interface */
// Rule

export type ShieldRule = IRule | ILogicRule;

export declare class IRule {
  readonly name: string;

  constructor(options: IRuleOptions);

  equals(rule: IRule): boolean;
  resolve(
    ctx: { [name: string]: any },
    type: string,
    path: string,
    rawInput: unknown,
    options: IOptions
  ): Promise<IRuleResult>;
}

export interface IRuleOptions {}

export declare class ILogicRule {
  constructor(rules: ShieldRule[]);

  getRules(): ShieldRule[];
  evaluate(
    ctx: { [name: string]: any },
    type: string,
    path: string,
    rawInput: unknown,
    options: IOptions
  ): Promise<IRuleResult[]>;
  resolve(
    ctx: { [name: string]: any },
    type: string,
    path: string,
    rawInput: unknown,
    options: IOptions
  ): Promise<IRuleResult>;
}

export type IRuleResult = boolean | string | Error;
export type IRuleFunction = (
  ctx: { [name: string]: any },
  type: string,
  path: string,
  rawInput: unknown,
  options: IOptions
) => IRuleResult | Promise<IRuleResult>;

export interface IRuleConstructorOptions {}

// Rules Definition Tree

export interface IRuleTypeMap {
  [key: string]: ShieldRule | IRuleFieldMap;
}
export interface IRuleFieldMap {
  [key: string]: ShieldRule;
}

export type IRules = ShieldRule | IRuleTypeMap;

export type IFallbackErrorMapperType = (
  err: unknown,
  ctx: { [name: string]: any },
  type: string,
  path: string,
  rawInput: unknown
) => Promise<Error> | Error;

export type IFallbackErrorType = Error | IFallbackErrorMapperType;

// Generator Options

export interface IOptions {
  debug: boolean;
  allowExternalErrors: boolean;
  fallbackRule: ShieldRule;
  fallbackError?: IFallbackErrorType;
}

export interface IOptionsConstructor {
  debug?: boolean;
  allowExternalErrors?: boolean;
  fallbackRule?: ShieldRule;
  fallbackError?: string | IFallbackErrorType;
}

export declare function shield(ruleTree: IRules, options: IOptions): any;

export interface IShieldContext {
  _shield: {};
}
