//! RoxenStubs.pmod/module.pike - Module index for Roxen framework stubs
//!
//! This module provides stub implementations of Roxen framework classes
//! to enable LSP analysis of Pike code that uses Roxen APIs without
//! requiring the actual Roxen runtime environment.

//! Make Roxen constants/classes available in inherit scope.
//! This exposes MODULE_*, TYPE_*, VAR_* and RequestID.
inherit "Roxen";

//! Provide base module behavior such as defvar().
inherit module;

//! Export the main Roxen stub class
constant Roxen = Roxen;

//! Export the main RXML stub class
constant RXML = RXML;
