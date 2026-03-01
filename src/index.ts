export function isOneOf<TValue, const TAllowed extends TValue>(
  value: TValue,
  allowed: ReadonlyArray<TAllowed>,
): value is TAllowed {
  return allowed.includes(value as TAllowed);
}
