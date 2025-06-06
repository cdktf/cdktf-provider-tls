# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-tls.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TlsProvider <a name="TlsProvider" id="@cdktf/provider-tls.provider.TlsProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tls/4.1.0/docs tls}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tls.provider.TlsProvider.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-tls'

new provider.TlsProvider(scope: Construct, id: string, config?: TlsProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-tls.provider.TlsProviderConfig">TlsProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tls.provider.TlsProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tls.provider.TlsProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-tls.provider.TlsProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-tls.provider.TlsProviderConfig">TlsProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.resetProxy">resetProxy</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-tls.provider.TlsProvider.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-tls.provider.TlsProvider.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tls.provider.TlsProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tls.provider.TlsProvider.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-tls.provider.TlsProvider.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-tls.provider.TlsProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-tls.provider.TlsProvider.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-tls.provider.TlsProvider.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-tls.provider.TlsProvider.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-tls.provider.TlsProvider.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-tls.provider.TlsProvider.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetProxy` <a name="resetProxy" id="@cdktf/provider-tls.provider.TlsProvider.resetProxy"></a>

```typescript
public resetProxy(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a TlsProvider resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-tls.provider.TlsProvider.isConstruct"></a>

```typescript
import { provider } from '@cdktf/provider-tls'

provider.TlsProvider.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-tls.provider.TlsProvider.isTerraformElement"></a>

```typescript
import { provider } from '@cdktf/provider-tls'

provider.TlsProvider.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tls.provider.TlsProvider.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktf/provider-tls.provider.TlsProvider.isTerraformProvider"></a>

```typescript
import { provider } from '@cdktf/provider-tls'

provider.TlsProvider.isTerraformProvider(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tls.provider.TlsProvider.isTerraformProvider.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-tls.provider.TlsProvider.generateConfigForImport"></a>

```typescript
import { provider } from '@cdktf/provider-tls'

provider.TlsProvider.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a TlsProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tls.provider.TlsProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-tls.provider.TlsProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TlsProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-tls.provider.TlsProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TlsProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tls/4.1.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tls.provider.TlsProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the TlsProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.property.metaAttributes">metaAttributes</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.property.proxyInput">proxyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-tls.provider.TlsProviderProxy">TlsProviderProxy</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.property.proxy">proxy</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-tls.provider.TlsProviderProxy">TlsProviderProxy</a>[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tls.provider.TlsProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-tls.provider.TlsProvider.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tls.provider.TlsProvider.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-tls.provider.TlsProvider.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktf/provider-tls.provider.TlsProvider.property.metaAttributes"></a>

```typescript
public readonly metaAttributes: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-tls.provider.TlsProvider.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-tls.provider.TlsProvider.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktf/provider-tls.provider.TlsProvider.property.terraformProviderSource"></a>

```typescript
public readonly terraformProviderSource: string;
```

- *Type:* string

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-tls.provider.TlsProvider.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-tls.provider.TlsProvider.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `proxyInput`<sup>Optional</sup> <a name="proxyInput" id="@cdktf/provider-tls.provider.TlsProvider.property.proxyInput"></a>

```typescript
public readonly proxyInput: IResolvable | TlsProviderProxy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-tls.provider.TlsProviderProxy">TlsProviderProxy</a>[]

---

##### `proxy`<sup>Optional</sup> <a name="proxy" id="@cdktf/provider-tls.provider.TlsProvider.property.proxy"></a>

```typescript
public readonly proxy: IResolvable | TlsProviderProxy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-tls.provider.TlsProviderProxy">TlsProviderProxy</a>[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tls.provider.TlsProvider.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TlsProviderConfig <a name="TlsProviderConfig" id="@cdktf/provider-tls.provider.TlsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tls.provider.TlsProviderConfig.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-tls'

const tlsProviderConfig: provider.TlsProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.provider.TlsProviderConfig.property.alias">alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktf/provider-tls.provider.TlsProviderConfig.property.proxy">proxy</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-tls.provider.TlsProviderProxy">TlsProviderProxy</a>[]</code> | proxy block. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-tls.provider.TlsProviderConfig.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.1.0/docs#alias TlsProvider#alias}

---

##### `proxy`<sup>Optional</sup> <a name="proxy" id="@cdktf/provider-tls.provider.TlsProviderConfig.property.proxy"></a>

```typescript
public readonly proxy: IResolvable | TlsProviderProxy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-tls.provider.TlsProviderProxy">TlsProviderProxy</a>[]

proxy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.1.0/docs#proxy TlsProvider#proxy}

---

### TlsProviderProxy <a name="TlsProviderProxy" id="@cdktf/provider-tls.provider.TlsProviderProxy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tls.provider.TlsProviderProxy.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-tls'

const tlsProviderProxy: provider.TlsProviderProxy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.provider.TlsProviderProxy.property.fromEnv">fromEnv</a></code> | <code>boolean \| cdktf.IResolvable</code> | When `true` the provider will discover the proxy configuration from environment variables. |
| <code><a href="#@cdktf/provider-tls.provider.TlsProviderProxy.property.password">password</a></code> | <code>string</code> | Password used for Basic authentication against the Proxy. |
| <code><a href="#@cdktf/provider-tls.provider.TlsProviderProxy.property.url">url</a></code> | <code>string</code> | URL used to connect to the Proxy. Accepted schemes are: `http`, `https`, `socks5`. |
| <code><a href="#@cdktf/provider-tls.provider.TlsProviderProxy.property.username">username</a></code> | <code>string</code> | Username (or Token) used for Basic authentication against the Proxy. |

---

##### `fromEnv`<sup>Optional</sup> <a name="fromEnv" id="@cdktf/provider-tls.provider.TlsProviderProxy.property.fromEnv"></a>

```typescript
public readonly fromEnv: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When `true` the provider will discover the proxy configuration from environment variables.

This is based upon [`http.ProxyFromEnvironment`](https://pkg.go.dev/net/http#ProxyFromEnvironment) and it supports the same environment variables (default: `true`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.1.0/docs#from_env TlsProvider#from_env}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-tls.provider.TlsProviderProxy.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Password used for Basic authentication against the Proxy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.1.0/docs#password TlsProvider#password}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-tls.provider.TlsProviderProxy.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

URL used to connect to the Proxy. Accepted schemes are: `http`, `https`, `socks5`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.1.0/docs#url TlsProvider#url}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-tls.provider.TlsProviderProxy.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Username (or Token) used for Basic authentication against the Proxy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.1.0/docs#username TlsProvider#username}

---



