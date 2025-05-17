#!/bin/sh
if [ -z "$husky_skip_init" ]; then
  debug() {
    [ "$HUSKY_DEBUG" = "1" ] && echo "husky: $*"
  }
  readonly hook_name="$(basename "$0")"
  debug "starting $hook_name..."
  if [ -z "$HUSKY" ]; then
    echo "Can't find HUSKY, skipping hook" >&2
    exit 0
  fi
  export HUSKY_GIT_PARAMS="$*"
  [ -f ~/.huskyrc ] && . ~/.huskyrc
  export PATH="$HUSKY_NODE_PATH:$PATH"
  sh -e "$0" "$@"
  exit $?
fi
