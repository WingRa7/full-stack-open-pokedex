Rust

`rustc` - the rust compiler, provides a set of built-in lints. In addition to `rustc` we have Clippy, a tool which comprises of a collection of lints that catches common mistakes in Rust code
whilst also helping to make code more simplistic and idiomatic. Another benefit is that it picks up patterns in the code which offer sub-par performance and corrects them. You can install it
using `cargo clippy`.

Rust also handily offers built-in testing functionality that includes unit and integration tests. Test are marked with `#[test]` before the `fn` keyword and use assertions like `assert!`,
`assert_eq!`. Tests can be run using the `cargo test` command that compiles the code then executes the tests and provides a report.

## `cargo` is the build tool for Rust. The `cargo build` command compiles the current project. The actual compiler is called `rustc`, as mentioned earlier.

An alternative to Jenkins and Github Actions might include CircleCI. Circle offers both cloud-hosted and self-hosted runners. Self-hosting requires provisioning, monitoring and maintenance of servers, something that can be avoided with cloud-based solutions. So you can make the best decision you would have to consider how much time your team can dedicate to the upkeep of a self-hosted CI, what your volume of usage is, how you want to manage the costs and what level of performance or security you require.
