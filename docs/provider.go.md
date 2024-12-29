# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-tls.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TlsProvider <a name="TlsProvider" id="@cdktf/provider-tls.provider.TlsProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.6/docs tls}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tls.provider.TlsProvider.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tls-go/tls/v10/provider"

provider.NewTlsProvider(scope Construct, id *string, config TlsProviderConfig) TlsProvider
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-tls.provider.TlsProviderConfig">TlsProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tls.provider.TlsProvider.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tls.provider.TlsProvider.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-tls.provider.TlsProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-tls.provider.TlsProviderConfig">TlsProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.resetProxy">ResetProxy</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tls.provider.TlsProvider.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-tls.provider.TlsProvider.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tls.provider.TlsProvider.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tls.provider.TlsProvider.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-tls.provider.TlsProvider.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-tls.provider.TlsProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-tls.provider.TlsProvider.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-tls.provider.TlsProvider.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-tls.provider.TlsProvider.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-tls.provider.TlsProvider.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-tls.provider.TlsProvider.resetAlias"></a>

```go
func ResetAlias()
```

##### `ResetProxy` <a name="ResetProxy" id="@cdktf/provider-tls.provider.TlsProvider.resetProxy"></a>

```go
func ResetProxy()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.isTerraformProvider">IsTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a TlsProvider resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-tls.provider.TlsProvider.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-tls-go/tls/v10/provider"

provider.TlsProvider_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-tls.provider.TlsProvider.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-tls-go/tls/v10/provider"

provider.TlsProvider_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tls.provider.TlsProvider.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktf/provider-tls.provider.TlsProvider.isTerraformProvider"></a>

```go
import "github.com/cdktf/cdktf-provider-tls-go/tls/v10/provider"

provider.TlsProvider_IsTerraformProvider(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tls.provider.TlsProvider.isTerraformProvider.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-tls.provider.TlsProvider.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-tls-go/tls/v10/provider"

provider.TlsProvider_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a TlsProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tls.provider.TlsProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-tls.provider.TlsProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the TlsProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-tls.provider.TlsProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing TlsProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.6/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tls.provider.TlsProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the TlsProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.property.metaAttributes">MetaAttributes</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.property.aliasInput">AliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.property.proxyInput">ProxyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.property.proxy">Proxy</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-tls.provider.TlsProvider.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-tls.provider.TlsProvider.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tls.provider.TlsProvider.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-tls.provider.TlsProvider.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktf/provider-tls.provider.TlsProvider.property.metaAttributes"></a>

```go
func MetaAttributes() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-tls.provider.TlsProvider.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-tls.provider.TlsProvider.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktf/provider-tls.provider.TlsProvider.property.terraformProviderSource"></a>

```go
func TerraformProviderSource() *string
```

- *Type:* *string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-tls.provider.TlsProvider.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-tls.provider.TlsProvider.property.aliasInput"></a>

```go
func AliasInput() *string
```

- *Type:* *string

---

##### `ProxyInput`<sup>Optional</sup> <a name="ProxyInput" id="@cdktf/provider-tls.provider.TlsProvider.property.proxyInput"></a>

```go
func ProxyInput() interface{}
```

- *Type:* interface{}

---

##### `Proxy`<sup>Optional</sup> <a name="Proxy" id="@cdktf/provider-tls.provider.TlsProvider.property.proxy"></a>

```go
func Proxy() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-tls.provider.TlsProvider.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### TlsProviderConfig <a name="TlsProviderConfig" id="@cdktf/provider-tls.provider.TlsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tls.provider.TlsProviderConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tls-go/tls/v10/provider"

&provider.TlsProviderConfig {
	Alias: *string,
	Proxy: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.provider.TlsProviderConfig.property.alias">Alias</a></code> | <code>*string</code> | Alias name. |
| <code><a href="#@cdktf/provider-tls.provider.TlsProviderConfig.property.proxy">Proxy</a></code> | <code>interface{}</code> | proxy block. |

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-tls.provider.TlsProviderConfig.property.alias"></a>

```go
Alias *string
```

- *Type:* *string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.6/docs#alias TlsProvider#alias}

---

##### `Proxy`<sup>Optional</sup> <a name="Proxy" id="@cdktf/provider-tls.provider.TlsProviderConfig.property.proxy"></a>

```go
Proxy interface{}
```

- *Type:* interface{}

proxy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.6/docs#proxy TlsProvider#proxy}

---

### TlsProviderProxy <a name="TlsProviderProxy" id="@cdktf/provider-tls.provider.TlsProviderProxy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tls.provider.TlsProviderProxy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tls-go/tls/v10/provider"

&provider.TlsProviderProxy {
	FromEnv: interface{},
	Password: *string,
	Url: *string,
	Username: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.provider.TlsProviderProxy.property.fromEnv">FromEnv</a></code> | <code>interface{}</code> | When `true` the provider will discover the proxy configuration from environment variables. |
| <code><a href="#@cdktf/provider-tls.provider.TlsProviderProxy.property.password">Password</a></code> | <code>*string</code> | Password used for Basic authentication against the Proxy. |
| <code><a href="#@cdktf/provider-tls.provider.TlsProviderProxy.property.url">Url</a></code> | <code>*string</code> | URL used to connect to the Proxy. Accepted schemes are: `http`, `https`, `socks5`. |
| <code><a href="#@cdktf/provider-tls.provider.TlsProviderProxy.property.username">Username</a></code> | <code>*string</code> | Username (or Token) used for Basic authentication against the Proxy. |

---

##### `FromEnv`<sup>Optional</sup> <a name="FromEnv" id="@cdktf/provider-tls.provider.TlsProviderProxy.property.fromEnv"></a>

```go
FromEnv interface{}
```

- *Type:* interface{}

When `true` the provider will discover the proxy configuration from environment variables.

This is based upon [`http.ProxyFromEnvironment`](https://pkg.go.dev/net/http#ProxyFromEnvironment) and it supports the same environment variables (default: `true`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.6/docs#from_env TlsProvider#from_env}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-tls.provider.TlsProviderProxy.property.password"></a>

```go
Password *string
```

- *Type:* *string

Password used for Basic authentication against the Proxy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.6/docs#password TlsProvider#password}

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktf/provider-tls.provider.TlsProviderProxy.property.url"></a>

```go
Url *string
```

- *Type:* *string

URL used to connect to the Proxy. Accepted schemes are: `http`, `https`, `socks5`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.6/docs#url TlsProvider#url}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-tls.provider.TlsProviderProxy.property.username"></a>

```go
Username *string
```

- *Type:* *string

Username (or Token) used for Basic authentication against the Proxy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.6/docs#username TlsProvider#username}

---



