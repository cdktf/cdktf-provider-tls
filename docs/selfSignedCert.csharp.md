# `selfSignedCert` Submodule <a name="`selfSignedCert` Submodule" id="@cdktf/provider-tls.selfSignedCert"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SelfSignedCert <a name="SelfSignedCert" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs/resources/self_signed_cert tls_self_signed_cert}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tls;

new SelfSignedCert(Construct Scope, string Id, SelfSignedCertConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig">SelfSignedCertConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig">SelfSignedCertConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.putSubject">PutSubject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetDnsNames">ResetDnsNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetEarlyRenewalHours">ResetEarlyRenewalHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetIpAddresses">ResetIpAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetIsCaCertificate">ResetIsCaCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetSetAuthorityKeyId">ResetSetAuthorityKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetSetSubjectKeyId">ResetSetSubjectKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetSubject">ResetSubject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetUris">ResetUris</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSubject` <a name="PutSubject" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.putSubject"></a>

```csharp
private void PutSubject(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.putSubject.parameter.value"></a>

- *Type:* object

---

##### `ResetDnsNames` <a name="ResetDnsNames" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetDnsNames"></a>

```csharp
private void ResetDnsNames()
```

##### `ResetEarlyRenewalHours` <a name="ResetEarlyRenewalHours" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetEarlyRenewalHours"></a>

```csharp
private void ResetEarlyRenewalHours()
```

##### `ResetIpAddresses` <a name="ResetIpAddresses" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetIpAddresses"></a>

```csharp
private void ResetIpAddresses()
```

##### `ResetIsCaCertificate` <a name="ResetIsCaCertificate" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetIsCaCertificate"></a>

```csharp
private void ResetIsCaCertificate()
```

##### `ResetSetAuthorityKeyId` <a name="ResetSetAuthorityKeyId" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetSetAuthorityKeyId"></a>

```csharp
private void ResetSetAuthorityKeyId()
```

##### `ResetSetSubjectKeyId` <a name="ResetSetSubjectKeyId" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetSetSubjectKeyId"></a>

```csharp
private void ResetSetSubjectKeyId()
```

##### `ResetSubject` <a name="ResetSubject" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetSubject"></a>

```csharp
private void ResetSubject()
```

##### `ResetUris` <a name="ResetUris" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetUris"></a>

```csharp
private void ResetUris()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SelfSignedCert resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tls;

SelfSignedCert.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tls;

SelfSignedCert.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tls;

SelfSignedCert.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tls;

SelfSignedCert.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SelfSignedCert resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SelfSignedCert to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SelfSignedCert that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs/resources/self_signed_cert#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SelfSignedCert to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.certPem">CertPem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.keyAlgorithm">KeyAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.readyForRenewal">ReadyForRenewal</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.subject">Subject</a></code> | <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectList">SelfSignedCertSubjectList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.validityEndTime">ValidityEndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.validityStartTime">ValidityStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.allowedUsesInput">AllowedUsesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.dnsNamesInput">DnsNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.earlyRenewalHoursInput">EarlyRenewalHoursInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.ipAddressesInput">IpAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.isCaCertificateInput">IsCaCertificateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.privateKeyPemInput">PrivateKeyPemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.setAuthorityKeyIdInput">SetAuthorityKeyIdInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.setSubjectKeyIdInput">SetSubjectKeyIdInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.subjectInput">SubjectInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.urisInput">UrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.validityPeriodHoursInput">ValidityPeriodHoursInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.allowedUses">AllowedUses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.dnsNames">DnsNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.earlyRenewalHours">EarlyRenewalHours</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.ipAddresses">IpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.isCaCertificate">IsCaCertificate</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.privateKeyPem">PrivateKeyPem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.setAuthorityKeyId">SetAuthorityKeyId</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.setSubjectKeyId">SetSubjectKeyId</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.uris">Uris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.validityPeriodHours">ValidityPeriodHours</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CertPem`<sup>Required</sup> <a name="CertPem" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.certPem"></a>

```csharp
public string CertPem { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KeyAlgorithm`<sup>Required</sup> <a name="KeyAlgorithm" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.keyAlgorithm"></a>

```csharp
public string KeyAlgorithm { get; }
```

- *Type:* string

---

##### `ReadyForRenewal`<sup>Required</sup> <a name="ReadyForRenewal" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.readyForRenewal"></a>

```csharp
public IResolvable ReadyForRenewal { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.subject"></a>

```csharp
public SelfSignedCertSubjectList Subject { get; }
```

- *Type:* <a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectList">SelfSignedCertSubjectList</a>

---

##### `ValidityEndTime`<sup>Required</sup> <a name="ValidityEndTime" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.validityEndTime"></a>

```csharp
public string ValidityEndTime { get; }
```

- *Type:* string

---

##### `ValidityStartTime`<sup>Required</sup> <a name="ValidityStartTime" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.validityStartTime"></a>

```csharp
public string ValidityStartTime { get; }
```

- *Type:* string

---

##### `AllowedUsesInput`<sup>Optional</sup> <a name="AllowedUsesInput" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.allowedUsesInput"></a>

```csharp
public string[] AllowedUsesInput { get; }
```

- *Type:* string[]

---

##### `DnsNamesInput`<sup>Optional</sup> <a name="DnsNamesInput" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.dnsNamesInput"></a>

```csharp
public string[] DnsNamesInput { get; }
```

- *Type:* string[]

---

##### `EarlyRenewalHoursInput`<sup>Optional</sup> <a name="EarlyRenewalHoursInput" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.earlyRenewalHoursInput"></a>

```csharp
public double EarlyRenewalHoursInput { get; }
```

- *Type:* double

---

##### `IpAddressesInput`<sup>Optional</sup> <a name="IpAddressesInput" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.ipAddressesInput"></a>

```csharp
public string[] IpAddressesInput { get; }
```

- *Type:* string[]

---

##### `IsCaCertificateInput`<sup>Optional</sup> <a name="IsCaCertificateInput" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.isCaCertificateInput"></a>

```csharp
public object IsCaCertificateInput { get; }
```

- *Type:* object

---

##### `PrivateKeyPemInput`<sup>Optional</sup> <a name="PrivateKeyPemInput" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.privateKeyPemInput"></a>

```csharp
public string PrivateKeyPemInput { get; }
```

- *Type:* string

---

##### `SetAuthorityKeyIdInput`<sup>Optional</sup> <a name="SetAuthorityKeyIdInput" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.setAuthorityKeyIdInput"></a>

```csharp
public object SetAuthorityKeyIdInput { get; }
```

- *Type:* object

---

##### `SetSubjectKeyIdInput`<sup>Optional</sup> <a name="SetSubjectKeyIdInput" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.setSubjectKeyIdInput"></a>

```csharp
public object SetSubjectKeyIdInput { get; }
```

- *Type:* object

---

##### `SubjectInput`<sup>Optional</sup> <a name="SubjectInput" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.subjectInput"></a>

```csharp
public object SubjectInput { get; }
```

- *Type:* object

---

##### `UrisInput`<sup>Optional</sup> <a name="UrisInput" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.urisInput"></a>

```csharp
public string[] UrisInput { get; }
```

- *Type:* string[]

---

##### `ValidityPeriodHoursInput`<sup>Optional</sup> <a name="ValidityPeriodHoursInput" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.validityPeriodHoursInput"></a>

```csharp
public double ValidityPeriodHoursInput { get; }
```

- *Type:* double

---

##### `AllowedUses`<sup>Required</sup> <a name="AllowedUses" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.allowedUses"></a>

```csharp
public string[] AllowedUses { get; }
```

- *Type:* string[]

---

##### `DnsNames`<sup>Required</sup> <a name="DnsNames" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.dnsNames"></a>

```csharp
public string[] DnsNames { get; }
```

- *Type:* string[]

---

##### `EarlyRenewalHours`<sup>Required</sup> <a name="EarlyRenewalHours" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.earlyRenewalHours"></a>

```csharp
public double EarlyRenewalHours { get; }
```

- *Type:* double

---

##### `IpAddresses`<sup>Required</sup> <a name="IpAddresses" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.ipAddresses"></a>

```csharp
public string[] IpAddresses { get; }
```

- *Type:* string[]

---

##### `IsCaCertificate`<sup>Required</sup> <a name="IsCaCertificate" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.isCaCertificate"></a>

```csharp
public object IsCaCertificate { get; }
```

- *Type:* object

---

##### `PrivateKeyPem`<sup>Required</sup> <a name="PrivateKeyPem" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.privateKeyPem"></a>

```csharp
public string PrivateKeyPem { get; }
```

- *Type:* string

---

##### `SetAuthorityKeyId`<sup>Required</sup> <a name="SetAuthorityKeyId" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.setAuthorityKeyId"></a>

```csharp
public object SetAuthorityKeyId { get; }
```

- *Type:* object

---

##### `SetSubjectKeyId`<sup>Required</sup> <a name="SetSubjectKeyId" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.setSubjectKeyId"></a>

```csharp
public object SetSubjectKeyId { get; }
```

- *Type:* object

---

##### `Uris`<sup>Required</sup> <a name="Uris" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.uris"></a>

```csharp
public string[] Uris { get; }
```

- *Type:* string[]

---

##### `ValidityPeriodHours`<sup>Required</sup> <a name="ValidityPeriodHours" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.validityPeriodHours"></a>

```csharp
public double ValidityPeriodHours { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SelfSignedCertConfig <a name="SelfSignedCertConfig" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tls;

new SelfSignedCertConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string[] AllowedUses,
    string PrivateKeyPem,
    double ValidityPeriodHours,
    string[] DnsNames = null,
    double EarlyRenewalHours = null,
    string[] IpAddresses = null,
    object IsCaCertificate = null,
    object SetAuthorityKeyId = null,
    object SetSubjectKeyId = null,
    object Subject = null,
    string[] Uris = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.allowedUses">AllowedUses</a></code> | <code>string[]</code> | List of key usages allowed for the issued certificate. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.privateKeyPem">PrivateKeyPem</a></code> | <code>string</code> | Private key in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format, that the certificate will belong to. This can be read from a separate file using the [`file`](https://www.terraform.io/language/functions/file) interpolation function. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.validityPeriodHours">ValidityPeriodHours</a></code> | <code>double</code> | Number of hours, after initial issuing, that the certificate will remain valid for. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.dnsNames">DnsNames</a></code> | <code>string[]</code> | List of DNS names for which a certificate is being requested (i.e. certificate subjects). |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.earlyRenewalHours">EarlyRenewalHours</a></code> | <code>double</code> | The resource will consider the certificate to have expired the given number of hours before its actual expiry time. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.ipAddresses">IpAddresses</a></code> | <code>string[]</code> | List of IP addresses for which a certificate is being requested (i.e. certificate subjects). |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.isCaCertificate">IsCaCertificate</a></code> | <code>object</code> | Is the generated certificate representing a Certificate Authority (CA) (default: `false`). |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.setAuthorityKeyId">SetAuthorityKeyId</a></code> | <code>object</code> | Should the generated certificate include an [authority key identifier](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.1): for self-signed certificates this is the same value as the [subject key identifier](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.2) (default: `false`). |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.setSubjectKeyId">SetSubjectKeyId</a></code> | <code>object</code> | Should the generated certificate include a [subject key identifier](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.2) (default: `false`). |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.subject">Subject</a></code> | <code>object</code> | subject block. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.uris">Uris</a></code> | <code>string[]</code> | List of URIs for which a certificate is being requested (i.e. certificate subjects). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AllowedUses`<sup>Required</sup> <a name="AllowedUses" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.allowedUses"></a>

```csharp
public string[] AllowedUses { get; set; }
```

- *Type:* string[]

List of key usages allowed for the issued certificate.

Values are defined in [RFC 5280](https://datatracker.ietf.org/doc/html/rfc5280) and combine flags defined by both [Key Usages](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.3) and [Extended Key Usages](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.12). Accepted values: `any_extended`, `cert_signing`, `client_auth`, `code_signing`, `content_commitment`, `crl_signing`, `data_encipherment`, `decipher_only`, `digital_signature`, `email_protection`, `encipher_only`, `ipsec_end_system`, `ipsec_tunnel`, `ipsec_user`, `key_agreement`, `key_encipherment`, `microsoft_commercial_code_signing`, `microsoft_kernel_code_signing`, `microsoft_server_gated_crypto`, `netscape_server_gated_crypto`, `ocsp_signing`, `server_auth`, `timestamping`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs/resources/self_signed_cert#allowed_uses SelfSignedCert#allowed_uses}

---

##### `PrivateKeyPem`<sup>Required</sup> <a name="PrivateKeyPem" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.privateKeyPem"></a>

```csharp
public string PrivateKeyPem { get; set; }
```

- *Type:* string

Private key in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format, that the certificate will belong to. This can be read from a separate file using the [`file`](https://www.terraform.io/language/functions/file) interpolation function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs/resources/self_signed_cert#private_key_pem SelfSignedCert#private_key_pem}

---

##### `ValidityPeriodHours`<sup>Required</sup> <a name="ValidityPeriodHours" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.validityPeriodHours"></a>

```csharp
public double ValidityPeriodHours { get; set; }
```

- *Type:* double

Number of hours, after initial issuing, that the certificate will remain valid for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs/resources/self_signed_cert#validity_period_hours SelfSignedCert#validity_period_hours}

---

##### `DnsNames`<sup>Optional</sup> <a name="DnsNames" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.dnsNames"></a>

```csharp
public string[] DnsNames { get; set; }
```

- *Type:* string[]

List of DNS names for which a certificate is being requested (i.e. certificate subjects).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs/resources/self_signed_cert#dns_names SelfSignedCert#dns_names}

---

##### `EarlyRenewalHours`<sup>Optional</sup> <a name="EarlyRenewalHours" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.earlyRenewalHours"></a>

```csharp
public double EarlyRenewalHours { get; set; }
```

- *Type:* double

The resource will consider the certificate to have expired the given number of hours before its actual expiry time.

This can be useful to deploy an updated certificate in advance of the expiration of the current certificate. However, the old certificate remains valid until its true expiration time, since this resource does not (and cannot) support certificate revocation. Also, this advance update can only be performed should the Terraform configuration be applied during the early renewal period. (default: `0`)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs/resources/self_signed_cert#early_renewal_hours SelfSignedCert#early_renewal_hours}

---

##### `IpAddresses`<sup>Optional</sup> <a name="IpAddresses" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.ipAddresses"></a>

```csharp
public string[] IpAddresses { get; set; }
```

- *Type:* string[]

List of IP addresses for which a certificate is being requested (i.e. certificate subjects).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs/resources/self_signed_cert#ip_addresses SelfSignedCert#ip_addresses}

---

##### `IsCaCertificate`<sup>Optional</sup> <a name="IsCaCertificate" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.isCaCertificate"></a>

```csharp
public object IsCaCertificate { get; set; }
```

- *Type:* object

Is the generated certificate representing a Certificate Authority (CA) (default: `false`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs/resources/self_signed_cert#is_ca_certificate SelfSignedCert#is_ca_certificate}

---

##### `SetAuthorityKeyId`<sup>Optional</sup> <a name="SetAuthorityKeyId" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.setAuthorityKeyId"></a>

```csharp
public object SetAuthorityKeyId { get; set; }
```

- *Type:* object

Should the generated certificate include an [authority key identifier](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.1): for self-signed certificates this is the same value as the [subject key identifier](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.2) (default: `false`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs/resources/self_signed_cert#set_authority_key_id SelfSignedCert#set_authority_key_id}

---

##### `SetSubjectKeyId`<sup>Optional</sup> <a name="SetSubjectKeyId" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.setSubjectKeyId"></a>

```csharp
public object SetSubjectKeyId { get; set; }
```

- *Type:* object

Should the generated certificate include a [subject key identifier](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.2) (default: `false`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs/resources/self_signed_cert#set_subject_key_id SelfSignedCert#set_subject_key_id}

---

##### `Subject`<sup>Optional</sup> <a name="Subject" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.subject"></a>

```csharp
public object Subject { get; set; }
```

- *Type:* object

subject block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs/resources/self_signed_cert#subject SelfSignedCert#subject}

---

##### `Uris`<sup>Optional</sup> <a name="Uris" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.uris"></a>

```csharp
public string[] Uris { get; set; }
```

- *Type:* string[]

List of URIs for which a certificate is being requested (i.e. certificate subjects).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs/resources/self_signed_cert#uris SelfSignedCert#uris}

---

### SelfSignedCertSubject <a name="SelfSignedCertSubject" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tls;

new SelfSignedCertSubject {
    string CommonName = null,
    string Country = null,
    string Locality = null,
    string Organization = null,
    string OrganizationalUnit = null,
    string PostalCode = null,
    string Province = null,
    string SerialNumber = null,
    string[] StreetAddress = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.commonName">CommonName</a></code> | <code>string</code> | Distinguished name: `CN`. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.country">Country</a></code> | <code>string</code> | Distinguished name: `C`. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.locality">Locality</a></code> | <code>string</code> | Distinguished name: `L`. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.organization">Organization</a></code> | <code>string</code> | Distinguished name: `O`. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.organizationalUnit">OrganizationalUnit</a></code> | <code>string</code> | Distinguished name: `OU`. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.postalCode">PostalCode</a></code> | <code>string</code> | Distinguished name: `PC`. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.province">Province</a></code> | <code>string</code> | Distinguished name: `ST`. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.serialNumber">SerialNumber</a></code> | <code>string</code> | Distinguished name: `SERIALNUMBER`. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.streetAddress">StreetAddress</a></code> | <code>string[]</code> | Distinguished name: `STREET`. |

---

##### `CommonName`<sup>Optional</sup> <a name="CommonName" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.commonName"></a>

```csharp
public string CommonName { get; set; }
```

- *Type:* string

Distinguished name: `CN`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs/resources/self_signed_cert#common_name SelfSignedCert#common_name}

---

##### `Country`<sup>Optional</sup> <a name="Country" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.country"></a>

```csharp
public string Country { get; set; }
```

- *Type:* string

Distinguished name: `C`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs/resources/self_signed_cert#country SelfSignedCert#country}

---

##### `Locality`<sup>Optional</sup> <a name="Locality" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.locality"></a>

```csharp
public string Locality { get; set; }
```

- *Type:* string

Distinguished name: `L`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs/resources/self_signed_cert#locality SelfSignedCert#locality}

---

##### `Organization`<sup>Optional</sup> <a name="Organization" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.organization"></a>

```csharp
public string Organization { get; set; }
```

- *Type:* string

Distinguished name: `O`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs/resources/self_signed_cert#organization SelfSignedCert#organization}

---

##### `OrganizationalUnit`<sup>Optional</sup> <a name="OrganizationalUnit" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.organizationalUnit"></a>

```csharp
public string OrganizationalUnit { get; set; }
```

- *Type:* string

Distinguished name: `OU`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs/resources/self_signed_cert#organizational_unit SelfSignedCert#organizational_unit}

---

##### `PostalCode`<sup>Optional</sup> <a name="PostalCode" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.postalCode"></a>

```csharp
public string PostalCode { get; set; }
```

- *Type:* string

Distinguished name: `PC`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs/resources/self_signed_cert#postal_code SelfSignedCert#postal_code}

---

##### `Province`<sup>Optional</sup> <a name="Province" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.province"></a>

```csharp
public string Province { get; set; }
```

- *Type:* string

Distinguished name: `ST`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs/resources/self_signed_cert#province SelfSignedCert#province}

---

##### `SerialNumber`<sup>Optional</sup> <a name="SerialNumber" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.serialNumber"></a>

```csharp
public string SerialNumber { get; set; }
```

- *Type:* string

Distinguished name: `SERIALNUMBER`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs/resources/self_signed_cert#serial_number SelfSignedCert#serial_number}

---

##### `StreetAddress`<sup>Optional</sup> <a name="StreetAddress" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.streetAddress"></a>

```csharp
public string[] StreetAddress { get; set; }
```

- *Type:* string[]

Distinguished name: `STREET`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs/resources/self_signed_cert#street_address SelfSignedCert#street_address}

---

## Classes <a name="Classes" id="Classes"></a>

### SelfSignedCertSubjectList <a name="SelfSignedCertSubjectList" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tls;

new SelfSignedCertSubjectList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectList.get"></a>

```csharp
private SelfSignedCertSubjectOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SelfSignedCertSubjectOutputReference <a name="SelfSignedCertSubjectOutputReference" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tls;

new SelfSignedCertSubjectOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetCommonName">ResetCommonName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetCountry">ResetCountry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetLocality">ResetLocality</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetOrganization">ResetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetOrganizationalUnit">ResetOrganizationalUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetPostalCode">ResetPostalCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetProvince">ResetProvince</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetSerialNumber">ResetSerialNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetStreetAddress">ResetStreetAddress</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCommonName` <a name="ResetCommonName" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetCommonName"></a>

```csharp
private void ResetCommonName()
```

##### `ResetCountry` <a name="ResetCountry" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetCountry"></a>

```csharp
private void ResetCountry()
```

##### `ResetLocality` <a name="ResetLocality" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetLocality"></a>

```csharp
private void ResetLocality()
```

##### `ResetOrganization` <a name="ResetOrganization" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetOrganization"></a>

```csharp
private void ResetOrganization()
```

##### `ResetOrganizationalUnit` <a name="ResetOrganizationalUnit" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetOrganizationalUnit"></a>

```csharp
private void ResetOrganizationalUnit()
```

##### `ResetPostalCode` <a name="ResetPostalCode" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetPostalCode"></a>

```csharp
private void ResetPostalCode()
```

##### `ResetProvince` <a name="ResetProvince" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetProvince"></a>

```csharp
private void ResetProvince()
```

##### `ResetSerialNumber` <a name="ResetSerialNumber" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetSerialNumber"></a>

```csharp
private void ResetSerialNumber()
```

##### `ResetStreetAddress` <a name="ResetStreetAddress" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetStreetAddress"></a>

```csharp
private void ResetStreetAddress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.commonNameInput">CommonNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.countryInput">CountryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.localityInput">LocalityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.organizationalUnitInput">OrganizationalUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.organizationInput">OrganizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.postalCodeInput">PostalCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.provinceInput">ProvinceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.serialNumberInput">SerialNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.streetAddressInput">StreetAddressInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.commonName">CommonName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.country">Country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.locality">Locality</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.organization">Organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.organizationalUnit">OrganizationalUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.postalCode">PostalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.province">Province</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.serialNumber">SerialNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.streetAddress">StreetAddress</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CommonNameInput`<sup>Optional</sup> <a name="CommonNameInput" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.commonNameInput"></a>

```csharp
public string CommonNameInput { get; }
```

- *Type:* string

---

##### `CountryInput`<sup>Optional</sup> <a name="CountryInput" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.countryInput"></a>

```csharp
public string CountryInput { get; }
```

- *Type:* string

---

##### `LocalityInput`<sup>Optional</sup> <a name="LocalityInput" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.localityInput"></a>

```csharp
public string LocalityInput { get; }
```

- *Type:* string

---

##### `OrganizationalUnitInput`<sup>Optional</sup> <a name="OrganizationalUnitInput" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.organizationalUnitInput"></a>

```csharp
public string OrganizationalUnitInput { get; }
```

- *Type:* string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.organizationInput"></a>

```csharp
public string OrganizationInput { get; }
```

- *Type:* string

---

##### `PostalCodeInput`<sup>Optional</sup> <a name="PostalCodeInput" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.postalCodeInput"></a>

```csharp
public string PostalCodeInput { get; }
```

- *Type:* string

---

##### `ProvinceInput`<sup>Optional</sup> <a name="ProvinceInput" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.provinceInput"></a>

```csharp
public string ProvinceInput { get; }
```

- *Type:* string

---

##### `SerialNumberInput`<sup>Optional</sup> <a name="SerialNumberInput" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.serialNumberInput"></a>

```csharp
public string SerialNumberInput { get; }
```

- *Type:* string

---

##### `StreetAddressInput`<sup>Optional</sup> <a name="StreetAddressInput" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.streetAddressInput"></a>

```csharp
public string[] StreetAddressInput { get; }
```

- *Type:* string[]

---

##### `CommonName`<sup>Required</sup> <a name="CommonName" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.commonName"></a>

```csharp
public string CommonName { get; }
```

- *Type:* string

---

##### `Country`<sup>Required</sup> <a name="Country" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.country"></a>

```csharp
public string Country { get; }
```

- *Type:* string

---

##### `Locality`<sup>Required</sup> <a name="Locality" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.locality"></a>

```csharp
public string Locality { get; }
```

- *Type:* string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.organization"></a>

```csharp
public string Organization { get; }
```

- *Type:* string

---

##### `OrganizationalUnit`<sup>Required</sup> <a name="OrganizationalUnit" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.organizationalUnit"></a>

```csharp
public string OrganizationalUnit { get; }
```

- *Type:* string

---

##### `PostalCode`<sup>Required</sup> <a name="PostalCode" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.postalCode"></a>

```csharp
public string PostalCode { get; }
```

- *Type:* string

---

##### `Province`<sup>Required</sup> <a name="Province" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.province"></a>

```csharp
public string Province { get; }
```

- *Type:* string

---

##### `SerialNumber`<sup>Required</sup> <a name="SerialNumber" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.serialNumber"></a>

```csharp
public string SerialNumber { get; }
```

- *Type:* string

---

##### `StreetAddress`<sup>Required</sup> <a name="StreetAddress" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.streetAddress"></a>

```csharp
public string[] StreetAddress { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



