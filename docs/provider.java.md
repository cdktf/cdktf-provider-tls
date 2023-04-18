# `provider`

Refer to the Terraform Registory for docs: [`tls`](https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs).

# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-tls.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TlsProvider <a name="TlsProvider" id="@cdktf/provider-tls.provider.TlsProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs tls}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tls.provider.TlsProvider.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tls.provider.TlsProvider;

TlsProvider.Builder.create(Construct scope, java.lang.String id)
//  .alias(java.lang.String)
//  .proxy(TlsProviderProxy)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.Initializer.parameter.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.Initializer.parameter.proxy">proxy</a></code> | <code><a href="#@cdktf/provider-tls.provider.TlsProviderProxy">TlsProviderProxy</a></code> | proxy block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tls.provider.TlsProvider.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tls.provider.TlsProvider.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-tls.provider.TlsProvider.Initializer.parameter.alias"></a>

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs#alias TlsProvider#alias}

---

##### `proxy`<sup>Optional</sup> <a name="proxy" id="@cdktf/provider-tls.provider.TlsProvider.Initializer.parameter.proxy"></a>

- *Type:* <a href="#@cdktf/provider-tls.provider.TlsProviderProxy">TlsProviderProxy</a>

proxy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs#proxy TlsProvider#proxy}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.resetProxy">resetProxy</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-tls.provider.TlsProvider.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-tls.provider.TlsProvider.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tls.provider.TlsProvider.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tls.provider.TlsProvider.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-tls.provider.TlsProvider.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-tls.provider.TlsProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-tls.provider.TlsProvider.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-tls.provider.TlsProvider.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-tls.provider.TlsProvider.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-tls.provider.TlsProvider.resetAlias"></a>

```java
public void resetAlias()
```

##### `resetProxy` <a name="resetProxy" id="@cdktf/provider-tls.provider.TlsProvider.resetProxy"></a>

```java
public void resetProxy()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-tls.provider.TlsProvider.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.tls.provider.TlsProvider;

TlsProvider.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-tls.provider.TlsProvider.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.tls.provider.TlsProvider;

TlsProvider.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tls.provider.TlsProvider.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktf/provider-tls.provider.TlsProvider.isTerraformProvider"></a>

```java
import com.hashicorp.cdktf.providers.tls.provider.TlsProvider;

TlsProvider.isTerraformProvider(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tls.provider.TlsProvider.isTerraformProvider.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.property.metaAttributes">metaAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.property.aliasInput">aliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.property.proxyInput">proxyInput</a></code> | <code><a href="#@cdktf/provider-tls.provider.TlsProviderProxy">TlsProviderProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.property.proxy">proxy</a></code> | <code><a href="#@cdktf/provider-tls.provider.TlsProviderProxy">TlsProviderProxy</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tls.provider.TlsProvider.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-tls.provider.TlsProvider.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tls.provider.TlsProvider.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-tls.provider.TlsProvider.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktf/provider-tls.provider.TlsProvider.property.metaAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getMetaAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-tls.provider.TlsProvider.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-tls.provider.TlsProvider.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktf/provider-tls.provider.TlsProvider.property.terraformProviderSource"></a>

```java
public java.lang.String getTerraformProviderSource();
```

- *Type:* java.lang.String

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-tls.provider.TlsProvider.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-tls.provider.TlsProvider.property.aliasInput"></a>

```java
public java.lang.String getAliasInput();
```

- *Type:* java.lang.String

---

##### `proxyInput`<sup>Optional</sup> <a name="proxyInput" id="@cdktf/provider-tls.provider.TlsProvider.property.proxyInput"></a>

```java
public TlsProviderProxy getProxyInput();
```

- *Type:* <a href="#@cdktf/provider-tls.provider.TlsProviderProxy">TlsProviderProxy</a>

---

##### `proxy`<sup>Optional</sup> <a name="proxy" id="@cdktf/provider-tls.provider.TlsProvider.property.proxy"></a>

```java
public TlsProviderProxy getProxy();
```

- *Type:* <a href="#@cdktf/provider-tls.provider.TlsProviderProxy">TlsProviderProxy</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.provider.TlsProvider.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tls.provider.TlsProvider.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### TlsProviderConfig <a name="TlsProviderConfig" id="@cdktf/provider-tls.provider.TlsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tls.provider.TlsProviderConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tls.provider.TlsProviderConfig;

TlsProviderConfig.builder()
//  .alias(java.lang.String)
//  .proxy(TlsProviderProxy)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.provider.TlsProviderConfig.property.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@cdktf/provider-tls.provider.TlsProviderConfig.property.proxy">proxy</a></code> | <code><a href="#@cdktf/provider-tls.provider.TlsProviderProxy">TlsProviderProxy</a></code> | proxy block. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-tls.provider.TlsProviderConfig.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs#alias TlsProvider#alias}

---

##### `proxy`<sup>Optional</sup> <a name="proxy" id="@cdktf/provider-tls.provider.TlsProviderConfig.property.proxy"></a>

```java
public TlsProviderProxy getProxy();
```

- *Type:* <a href="#@cdktf/provider-tls.provider.TlsProviderProxy">TlsProviderProxy</a>

proxy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs#proxy TlsProvider#proxy}

---

### TlsProviderProxy <a name="TlsProviderProxy" id="@cdktf/provider-tls.provider.TlsProviderProxy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tls.provider.TlsProviderProxy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tls.provider.TlsProviderProxy;

TlsProviderProxy.builder()
//  .fromEnv(java.lang.Boolean)
//  .fromEnv(IResolvable)
//  .password(java.lang.String)
//  .url(java.lang.String)
//  .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.provider.TlsProviderProxy.property.fromEnv">fromEnv</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When `true` the provider will discover the proxy configuration from environment variables. |
| <code><a href="#@cdktf/provider-tls.provider.TlsProviderProxy.property.password">password</a></code> | <code>java.lang.String</code> | Password used for Basic authentication against the Proxy. |
| <code><a href="#@cdktf/provider-tls.provider.TlsProviderProxy.property.url">url</a></code> | <code>java.lang.String</code> | URL used to connect to the Proxy. Accepted schemes are: `http`, `https`, `socks5`. |
| <code><a href="#@cdktf/provider-tls.provider.TlsProviderProxy.property.username">username</a></code> | <code>java.lang.String</code> | Username (or Token) used for Basic authentication against the Proxy. |

---

##### `fromEnv`<sup>Optional</sup> <a name="fromEnv" id="@cdktf/provider-tls.provider.TlsProviderProxy.property.fromEnv"></a>

```java
public java.lang.Object getFromEnv();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When `true` the provider will discover the proxy configuration from environment variables.

This is based upon [`http.ProxyFromEnvironment`](https://pkg.go.dev/net/http#ProxyFromEnvironment) and it supports the same environment variables (default: `true`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs#from_env TlsProvider#from_env}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-tls.provider.TlsProviderProxy.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Password used for Basic authentication against the Proxy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs#password TlsProvider#password}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-tls.provider.TlsProviderProxy.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

URL used to connect to the Proxy. Accepted schemes are: `http`, `https`, `socks5`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs#url TlsProvider#url}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-tls.provider.TlsProviderProxy.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Username (or Token) used for Basic authentication against the Proxy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs#username TlsProvider#username}

---



