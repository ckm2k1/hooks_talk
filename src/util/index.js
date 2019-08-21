import faker from 'faker';

export function *monotonicGenerator(start = 0) {
  while (true) {
    ++start;
    yield start;
  }
}
const mgen = monotonicGenerator();

export function monotonic() {
  return mgen.next().value;
}
