# `dataTlsPublicKey` Submodule <a name="`dataTlsPublicKey` Submodule" id="@cdktf/provider-tls.dataTlsPublicKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataTlsPublicKey <a name="DataTlsPublicKey" id="@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs/data-sources/public_key tls_public_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tls;

new DataTlsPublicKey(Construct Scope, string Id, DataTlsPublicKeyConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKeyConfig">DataTlsPublicKeyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKeyConfig">DataTlsPublicKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.resetPrivateKeyOpenssh">ResetPrivateKeyOpenssh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.resetPrivateKeyPem">ResetPrivateKeyPem</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetPrivateKeyOpenssh` <a name="ResetPrivateKeyOpenssh" id="@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.resetPrivateKeyOpenssh"></a>

```csharp
private void ResetPrivateKeyOpenssh()
```

##### `ResetPrivateKeyPem` <a name="ResetPrivateKeyPem" id="@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.resetPrivateKeyPem"></a>

```csharp
private void ResetPrivateKeyPem()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataTlsPublicKey resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tls;

DataTlsPublicKey.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tls;

DataTlsPublicKey.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tls;

DataTlsPublicKey.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tls;

DataTlsPublicKey.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataTlsPublicKey resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataTlsPublicKey to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataTlsPublicKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs/data-sources/public_key#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataTlsPublicKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.property.algorithm">Algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.property.publicKeyFingerprintMd5">PublicKeyFingerprintMd5</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.property.publicKeyFingerprintSha256">PublicKeyFingerprintSha256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.property.publicKeyOpenssh">PublicKeyOpenssh</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.property.publicKeyPem">PublicKeyPem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.property.privateKeyOpensshInput">PrivateKeyOpensshInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.property.privateKeyPemInput">PrivateKeyPemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.property.privateKeyOpenssh">PrivateKeyOpenssh</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.property.privateKeyPem">PrivateKeyPem</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.property.algorithm"></a>

```csharp
public string Algorithm { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PublicKeyFingerprintMd5`<sup>Required</sup> <a name="PublicKeyFingerprintMd5" id="@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.property.publicKeyFingerprintMd5"></a>

```csharp
public string PublicKeyFingerprintMd5 { get; }
```

- *Type:* string

---

##### `PublicKeyFingerprintSha256`<sup>Required</sup> <a name="PublicKeyFingerprintSha256" id="@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.property.publicKeyFingerprintSha256"></a>

```csharp
public string PublicKeyFingerprintSha256 { get; }
```

- *Type:* string

---

##### `PublicKeyOpenssh`<sup>Required</sup> <a name="PublicKeyOpenssh" id="@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.property.publicKeyOpenssh"></a>

```csharp
public string PublicKeyOpenssh { get; }
```

- *Type:* string

---

##### `PublicKeyPem`<sup>Required</sup> <a name="PublicKeyPem" id="@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.property.publicKeyPem"></a>

```csharp
public string PublicKeyPem { get; }
```

- *Type:* string

---

##### `PrivateKeyOpensshInput`<sup>Optional</sup> <a name="PrivateKeyOpensshInput" id="@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.property.privateKeyOpensshInput"></a>

```csharp
public string PrivateKeyOpensshInput { get; }
```

- *Type:* string

---

##### `PrivateKeyPemInput`<sup>Optional</sup> <a name="PrivateKeyPemInput" id="@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.property.privateKeyPemInput"></a>

```csharp
public string PrivateKeyPemInput { get; }
```

- *Type:* string

---

##### `PrivateKeyOpenssh`<sup>Required</sup> <a name="PrivateKeyOpenssh" id="@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.property.privateKeyOpenssh"></a>

```csharp
public string PrivateKeyOpenssh { get; }
```

- *Type:* string

---

##### `PrivateKeyPem`<sup>Required</sup> <a name="PrivateKeyPem" id="@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.property.privateKeyPem"></a>

```csharp
public string PrivateKeyPem { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKey.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataTlsPublicKeyConfig <a name="DataTlsPublicKeyConfig" id="@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKeyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tls;

new DataTlsPublicKeyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string PrivateKeyOpenssh = null,
    string PrivateKeyPem = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKeyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKeyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKeyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKeyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKeyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKeyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKeyConfig.property.privateKeyOpenssh">PrivateKeyOpenssh</a></code> | <code>string</code> | The private key (in  [OpenSSH PEM (RFC 4716)](https://datatracker.ietf.org/doc/html/rfc4716) format) to extract the public key from. This is _mutually exclusive_ with `private_key_pem`. Currently-supported algorithms for keys are: `RSA`, `ECDSA`, `ED25519`. |
| <code><a href="#@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKeyConfig.property.privateKeyPem">PrivateKeyPem</a></code> | <code>string</code> | The private key (in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format) to extract the public key from. This is _mutually exclusive_ with `private_key_openssh`. Currently-supported algorithms for keys are: `RSA`, `ECDSA`, `ED25519`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKeyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKeyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKeyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKeyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKeyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKeyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKeyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `PrivateKeyOpenssh`<sup>Optional</sup> <a name="PrivateKeyOpenssh" id="@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKeyConfig.property.privateKeyOpenssh"></a>

```csharp
public string PrivateKeyOpenssh { get; set; }
```

- *Type:* string

The private key (in  [OpenSSH PEM (RFC 4716)](https://datatracker.ietf.org/doc/html/rfc4716) format) to extract the public key from. This is _mutually exclusive_ with `private_key_pem`. Currently-supported algorithms for keys are: `RSA`, `ECDSA`, `ED25519`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs/data-sources/public_key#private_key_openssh DataTlsPublicKey#private_key_openssh}

---

##### `PrivateKeyPem`<sup>Optional</sup> <a name="PrivateKeyPem" id="@cdktf/provider-tls.dataTlsPublicKey.DataTlsPublicKeyConfig.property.privateKeyPem"></a>

```csharp
public string PrivateKeyPem { get; set; }
```

- *Type:* string

The private key (in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format) to extract the public key from. This is _mutually exclusive_ with `private_key_openssh`. Currently-supported algorithms for keys are: `RSA`, `ECDSA`, `ED25519`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs/data-sources/public_key#private_key_pem DataTlsPublicKey#private_key_pem}

---



