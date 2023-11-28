# `provider`

Refer to the Terraform Registory for docs: [`tls`](https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs).

# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-tls.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TlsProvider <a name="TlsProvider" id="@cdktf/provider-tls.provider.TlsProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs tls}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tls.provider.TlsProvider.Initializer"></a>

```python
from cdktf_cdktf_provider_tls import provider

provider.TlsProvider(
  scope: Construct,
  id: str,
  alias: str = None,
  proxy: typing.Union[IResolvable, typing.List[TlsProviderProxy]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.Initializer.parameter.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.Initializer.parameter.proxy">proxy</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-tls.provider.TlsProviderProxy">TlsProviderProxy</a>]]</code> | proxy block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tls.provider.TlsProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tls.provider.TlsProvider.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-tls.provider.TlsProvider.Initializer.parameter.alias"></a>

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs#alias TlsProvider#alias}

---

##### `proxy`<sup>Optional</sup> <a name="proxy" id="@cdktf/provider-tls.provider.TlsProvider.Initializer.parameter.proxy"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-tls.provider.TlsProviderProxy">TlsProviderProxy</a>]]

proxy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs#proxy TlsProvider#proxy}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.resetAlias">reset_alias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.resetProxy">reset_proxy</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-tls.provider.TlsProvider.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-tls.provider.TlsProvider.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tls.provider.TlsProvider.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tls.provider.TlsProvider.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-tls.provider.TlsProvider.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-tls.provider.TlsProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-tls.provider.TlsProvider.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-tls.provider.TlsProvider.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-tls.provider.TlsProvider.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `reset_alias` <a name="reset_alias" id="@cdktf/provider-tls.provider.TlsProvider.resetAlias"></a>

```python
def reset_alias() -> None
```

##### `reset_proxy` <a name="reset_proxy" id="@cdktf/provider-tls.provider.TlsProvider.resetProxy"></a>

```python
def reset_proxy() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.isTerraformProvider">is_terraform_provider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a TlsProvider resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-tls.provider.TlsProvider.isConstruct"></a>

```python
from cdktf_cdktf_provider_tls import provider

provider.TlsProvider.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tls.provider.TlsProvider.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-tls.provider.TlsProvider.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_tls import provider

provider.TlsProvider.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tls.provider.TlsProvider.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_provider` <a name="is_terraform_provider" id="@cdktf/provider-tls.provider.TlsProvider.isTerraformProvider"></a>

```python
from cdktf_cdktf_provider_tls import provider

provider.TlsProvider.is_terraform_provider(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tls.provider.TlsProvider.isTerraformProvider.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-tls.provider.TlsProvider.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_tls import provider

provider.TlsProvider.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a TlsProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tls.provider.TlsProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-tls.provider.TlsProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the TlsProvider to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-tls.provider.TlsProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing TlsProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tls.provider.TlsProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the TlsProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.property.metaAttributes">meta_attributes</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.property.terraformProviderSource">terraform_provider_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.property.proxyInput">proxy_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-tls.provider.TlsProviderProxy">TlsProviderProxy</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.property.proxy">proxy</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-tls.provider.TlsProviderProxy">TlsProviderProxy</a>]]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tls.provider.TlsProvider.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-tls.provider.TlsProvider.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tls.provider.TlsProvider.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-tls.provider.TlsProvider.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `meta_attributes`<sup>Required</sup> <a name="meta_attributes" id="@cdktf/provider-tls.provider.TlsProvider.property.metaAttributes"></a>

```python
meta_attributes: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-tls.provider.TlsProvider.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-tls.provider.TlsProvider.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraform_provider_source`<sup>Optional</sup> <a name="terraform_provider_source" id="@cdktf/provider-tls.provider.TlsProvider.property.terraformProviderSource"></a>

```python
terraform_provider_source: str
```

- *Type:* str

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-tls.provider.TlsProvider.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@cdktf/provider-tls.provider.TlsProvider.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `proxy_input`<sup>Optional</sup> <a name="proxy_input" id="@cdktf/provider-tls.provider.TlsProvider.property.proxyInput"></a>

```python
proxy_input: typing.Union[IResolvable, typing.List[TlsProviderProxy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-tls.provider.TlsProviderProxy">TlsProviderProxy</a>]]

---

##### `proxy`<sup>Optional</sup> <a name="proxy" id="@cdktf/provider-tls.provider.TlsProvider.property.proxy"></a>

```python
proxy: typing.Union[IResolvable, typing.List[TlsProviderProxy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-tls.provider.TlsProviderProxy">TlsProviderProxy</a>]]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tls.provider.TlsProvider.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### TlsProviderConfig <a name="TlsProviderConfig" id="@cdktf/provider-tls.provider.TlsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tls.provider.TlsProviderConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_tls import provider

provider.TlsProviderConfig(
  alias: str = None,
  proxy: typing.Union[IResolvable, typing.List[TlsProviderProxy]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.provider.TlsProviderConfig.property.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktf/provider-tls.provider.TlsProviderConfig.property.proxy">proxy</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-tls.provider.TlsProviderProxy">TlsProviderProxy</a>]]</code> | proxy block. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-tls.provider.TlsProviderConfig.property.alias"></a>

```python
alias: str
```

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs#alias TlsProvider#alias}

---

##### `proxy`<sup>Optional</sup> <a name="proxy" id="@cdktf/provider-tls.provider.TlsProviderConfig.property.proxy"></a>

```python
proxy: typing.Union[IResolvable, typing.List[TlsProviderProxy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-tls.provider.TlsProviderProxy">TlsProviderProxy</a>]]

proxy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs#proxy TlsProvider#proxy}

---

### TlsProviderProxy <a name="TlsProviderProxy" id="@cdktf/provider-tls.provider.TlsProviderProxy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tls.provider.TlsProviderProxy.Initializer"></a>

```python
from cdktf_cdktf_provider_tls import provider

provider.TlsProviderProxy(
  from_env: typing.Union[bool, IResolvable] = None,
  password: str = None,
  url: str = None,
  username: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.provider.TlsProviderProxy.property.fromEnv">from_env</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When `true` the provider will discover the proxy configuration from environment variables. |
| <code><a href="#@cdktf/provider-tls.provider.TlsProviderProxy.property.password">password</a></code> | <code>str</code> | Password used for Basic authentication against the Proxy. |
| <code><a href="#@cdktf/provider-tls.provider.TlsProviderProxy.property.url">url</a></code> | <code>str</code> | URL used to connect to the Proxy. Accepted schemes are: `http`, `https`, `socks5`. |
| <code><a href="#@cdktf/provider-tls.provider.TlsProviderProxy.property.username">username</a></code> | <code>str</code> | Username (or Token) used for Basic authentication against the Proxy. |

---

##### `from_env`<sup>Optional</sup> <a name="from_env" id="@cdktf/provider-tls.provider.TlsProviderProxy.property.fromEnv"></a>

```python
from_env: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When `true` the provider will discover the proxy configuration from environment variables.

This is based upon [`http.ProxyFromEnvironment`](https://pkg.go.dev/net/http#ProxyFromEnvironment) and it supports the same environment variables (default: `true`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs#from_env TlsProvider#from_env}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-tls.provider.TlsProviderProxy.property.password"></a>

```python
password: str
```

- *Type:* str

Password used for Basic authentication against the Proxy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs#password TlsProvider#password}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-tls.provider.TlsProviderProxy.property.url"></a>

```python
url: str
```

- *Type:* str

URL used to connect to the Proxy. Accepted schemes are: `http`, `https`, `socks5`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs#url TlsProvider#url}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-tls.provider.TlsProviderProxy.property.username"></a>

```python
username: str
```

- *Type:* str

Username (or Token) used for Basic authentication against the Proxy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs#username TlsProvider#username}

---



