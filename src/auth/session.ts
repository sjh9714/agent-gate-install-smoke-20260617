export function sessionExpiry(issuedAt: number): number {
  return issuedAt + 3600;
}
