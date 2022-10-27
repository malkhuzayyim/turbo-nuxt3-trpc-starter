import { IRuleFunction, IRuleConstructorOptions, ShieldRule } from "./types";
import {
  Rule,
  RuleAnd,
  RuleOr,
  RuleNot,
  RuleTrue,
  RuleFalse,
  RuleChain,
  RuleRace,
} from "./rules";

/**
 *
 * @param name
 * @param options
 *
 * Wraps a function into a Rule class. This way we can identify rules
 * once we start generating middleware from our ruleTree.
 *
 * 1.
 * const auth = rule()(async (ctx, type, path, rawInput, options) => {
 *  return true
 * })
 *
 * 2.
 * const auth = rule('name')(async (ctx, type, path, rawInput, options) => {
 *  return true
 * })
 *
 * 3.
 * const auth = rule({
 *  name: 'name',
 * })(async (ctx, type, path, rawInput, options) => {
 *  return true
 * })
 *
 */
export const rule =
  (name?: string, options?: IRuleConstructorOptions) =>
  (func: IRuleFunction): Rule => {
    if (typeof name === "object") {
      options = name;
      name = Math.random().toString();
    } else if (typeof name === "string") {
      options = options || {};
    } else {
      name = Math.random().toString();
      options = {};
    }

    return new Rule(name, func, {});
  };

/**
 *
 * @param rules
 *
 * Logical operator and serves as a wrapper for and operation.
 *
 */
export const and = (...rules: ShieldRule[]): RuleAnd => {
  return new RuleAnd(rules);
};

/**
 *
 * @param rules
 *
 * Logical operator and serves as a wrapper for and operation.
 *
 */
export const chain = (...rules: ShieldRule[]): RuleChain => {
  return new RuleChain(rules);
};

/**
 *
 * @param rules
 *
 * Logical operator and serves as a wrapper for and operation.
 *
 */
export const race = (...rules: ShieldRule[]): RuleRace => {
  return new RuleRace(rules);
};

/**
 *
 * @param rules
 *
 * Logical operator or serves as a wrapper for or operation.
 *
 */
export const or = (...rules: ShieldRule[]): RuleOr => {
  return new RuleOr(rules);
};

/**
 *
 * @param rule
 *
 * Logical operator not serves as a wrapper for not operation.
 *
 */
export const not = (rule: ShieldRule, error?: string | Error): RuleNot => {
  if (typeof error === "string") return new RuleNot(rule, new Error(error));
  return new RuleNot(rule, error);
};

/**
 *
 * Allow queries.
 *
 */
export const allow = new RuleTrue();

/**
 *
 * Deny queries.
 *
 */
export const deny = new RuleFalse();
